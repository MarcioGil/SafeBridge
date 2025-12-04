const fetch = require('node-fetch');
const fs = require('fs');
const FormData = require('form-data');

const BASE_URL = 'http://localhost:3000';

async function testAuthAndUpload() {
  try {
    // 1. Tenta acessar rota protegida sem autenticação
    let res = await fetch(`${BASE_URL}/dashboard`);
    console.log('Acesso não autenticado /dashboard:', res.status);

    // 2. Realiza login (ajuste conforme seu provider, aqui exemplo com credentials)
    res = await fetch(`${BASE_URL}/api/auth/callback/credentials`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'username=admin&password=admin', // ajuste conforme seu schema
      redirect: 'manual',
    });
    const cookies = res.headers.raw()['set-cookie'];
    if (!cookies) {
      console.log('Falha no login: verifique usuário/senha ou provider');
      return;
    }
    console.log('Login realizado, cookies:', cookies.map(c=>c.split(';')[0]).join('; '));

    // 3. Acessa rota protegida autenticado
    res = await fetch(`${BASE_URL}/dashboard`, {
      headers: { Cookie: cookies.map(c=>c.split(';')[0]).join('; ') }
    });
    console.log('Acesso autenticado /dashboard:', res.status);

    // 4. Realiza upload autenticado
    const form = new FormData();
    form.append('file', fs.createReadStream(__filename), 'testfile.js');
    res = await fetch(`${BASE_URL}/api/occurrences/upload`, {
      method: 'POST',
      headers: { ...form.getHeaders(), Cookie: cookies.map(c=>c.split(';')[0]).join('; ') },
      body: form
    });
    const uploadResult = await res.text();
    console.log('Upload status:', res.status, '| Resposta:', uploadResult);
  } catch (err) {
    console.error('Erro no teste:', err);
  }
}

testAuthAndUpload();
