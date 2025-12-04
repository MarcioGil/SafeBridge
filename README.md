# SafeBridge

<!-- Badges CI/CD -->
<p align="left">
	<a href="https://github.com/MarcioGil/SafeBridge/actions/workflows/ci.yml">
		<img src="https://github.com/MarcioGil/SafeBridge/actions/workflows/ci.yml/badge.svg" alt="CI Status" />
	</a>
	<a href="https://vercel.com/dashboard">
		<img src="https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel" alt="Vercel Deploy" />
	</a>
	<a href="https://github.com/MarcioGil/SafeBridge">
		<img src="https://img.shields.io/github/license/MarcioGil/SafeBridge?color=blue" alt="License" />
	</a>
</p>

<!-- Imagem ilustrativa do projeto -->
<p align="center">
	<img src="https://raw.githubusercontent.com/MarcioGil/SafeBridge/main/vozesseguras/public/cover.png" alt="SafeBridge - Ilustração do Projeto" width="600" />
</p>

# SafeBridge

## Finalidade do Projeto
SafeBridge é uma plataforma digital desenvolvida para facilitar o registro, acompanhamento e gestão de ocorrências relacionadas à segurança e proteção de pessoas em ambientes urbanos e institucionais. O objetivo é oferecer um canal seguro, acessível e confiável para que qualquer pessoa possa relatar situações de risco, promover a transparência e fortalecer a resposta a incidentes.

## Público-Alvo
O aplicativo é destinado a:
- Cidadãos em geral que desejam relatar ocorrências de forma anônima ou identificada
- Profissionais de segurança, gestores públicos e equipes de resposta a emergências
- Pessoas com deficiência (PCDs), garantindo total acessibilidade digital
- Organizações e instituições que buscam monitorar e responder a incidentes de forma eficiente

## Acessibilidade
O SafeBridge foi projetado para ser totalmente acessível, permitindo que pessoas com deficiência (PCDs) utilizem o aplicativo com autonomia e segurança. As principais práticas e ferramentas adotadas incluem:

- **WCAG 2.1 AA**: Todos os fluxos seguem as Diretrizes de Acessibilidade para Conteúdo Web, garantindo contraste adequado, navegação por teclado, foco visível e ausência de barreiras para usuários com deficiência visual, auditiva, motora ou cognitiva.
- **HTML Semântico e ARIA**: Uso correto de headings, landmarks, roles e atributos ARIA para facilitar a navegação por leitores de tela (NVDA, JAWS, VoiceOver).
- **Labels e Descrições**: Todos os campos de formulário possuem labels associadas e descrições claras, inclusive para botões e áreas interativas.
- **Imagens com Texto Alternativo**: Todas as imagens e ícones possuem atributos `alt` descritivos, essenciais para usuários de leitores de tela.
- **Responsividade**: Layout adaptado para desktop, tablet e mobile, com elementos grandes e espaçamento adequado para navegação por toque.
- **Foco Visível e Navegação por Tabulação**: Todos os elementos interativos são acessíveis via teclado, com destaque visual de foco.
- **Testes com Ferramentas de Acessibilidade**: Utilização de Lighthouse, axe-core, Wave e testes manuais com leitores de tela para validação contínua.
- **Documentação e Feedback**: Orientações para uso acessível e canal para feedback de PCDs, promovendo melhoria contínua.

Essas práticas garantem que o SafeBridge seja inclusivo e possa ser utilizado por todos, sem exceção.

# Vozes Seguras

Projeto fullstack Next.js + TypeScript + Prisma + SQLite (dev) / Postgres (prod).

## Checklist de Produção

- Teste todas as rotas: `/`, `/dashboard`, `/occurrence`, `/privacy`
- Valide login, registro, upload e dashboard
- Verifique acessibilidade e responsividade
- Garanta backup do banco: `vozesseguras/dev.db`

## Segurança

- NEXTAUTH_SECRET gerado forte no `.env`
- Para produção, configure HTTPS e CSP seguro
- Nunca exponha dados sensíveis em variáveis públicas



## Deploy na Vercel (Recomendado)

1. Crie uma conta em [vercel.com](https://vercel.com) e conecte seu repositório (GitHub/GitLab/Bitbucket).

2. Configure as variáveis de ambiente no painel da Vercel:

	```env
	DATABASE_URL=postgresql://...         # URL do banco (Supabase/PostgreSQL)
	NEXTAUTH_SECRET=...                   # Chave forte (gere com: node -e "console.log(require('crypto').randomBytes(64).toString('hex'))")
	NEXTAUTH_URL=https://seuprojeto.vercel.app
	STORAGE_URL=...                       # (opcional, se usar Supabase Storage/S3)
	STORAGE_KEY=...                       # (opcional, se usar Supabase Storage/S3)
	```

3. No painel da Vercel, defina:
	- Framework: Next.js
	- Build Command: `npm run build`
	- Output Directory: `.`
	- Install Command: `npm install`

4. Banco de dados:
	- Use Supabase ou PostgreSQL gerenciado (crie o banco e cole a URL em `DATABASE_URL`)
	- Rode as migrações pelo terminal local:

	  ```bash
	  npx prisma migrate deploy --schema=prisma/schema.prisma
	  ```

5. Storage (uploads):
	- Configure Supabase Storage ou S3 e preencha as variáveis no painel da Vercel

6. Deploy:
	- Clique em "Deploy" na Vercel. O build será feito automaticamente.
	- Após o deploy, acesse a URL gerada e teste todos os fluxos.

7. Dicas finais:
	- Nunca suba o arquivo `.env` para o repositório
	- Sempre teste login, upload, dashboard e acessibilidade após deploy
	- Consulte os logs da Vercel para eventuais erros
	- Para automatizar o envio do código ao GitHub antes do deploy, use:

	  ```bash
	  npm run deploy:push
	  ```

---

## Comandos úteis

- Instalar dependências: `npm install`
- Build: `npm run build`
- Start produção: `npm start`
- Dev: `npm run dev`
- Migração Prisma: `npx prisma migrate dev --schema=prisma/schema.prisma`
- Gerar client Prisma: `npx prisma generate --schema=prisma/schema.prisma`

## Estrutura
- Next.js App Router
- Prisma ORM
- Autenticação NextAuth
- TailwindCSS
- Zod para validação
- Segurança e acessibilidade obrigatórias

## Comandos iniciais

```bash
npm install prisma @prisma/client next-auth tailwindcss postcss autoprefixer zod
npx prisma init
npx tailwindcss init -p
```

## Migração inicial

```bash
npx prisma migrate dev --name init
npx prisma generate
```

## Estrutura de pastas

- /app
- /components
- /lib
- /prisma
- /public

## Segurança
- HTTPS obrigatório em produção
- CSP, rate limiting, CORS, uploads seguros
- Secrets em vault/env vars
- Backups automáticos
- Logs mascarados
- Testes automatizados
- Testes de acessibilidade
- Política de privacidade
- Plano de resposta a incidentes

## Acessibilidade
- WCAG 2.1 AA
- HTML semântico
- Foco visível
- Contraste adequado
- Labels associadas
- Imagens com alt
- Layout responsivo

## Observações
- SQLite apenas para desenvolvimento
- Postgres/Supabase em produção
- Storage: S3/Supabase

---
