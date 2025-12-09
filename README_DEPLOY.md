# SafeBridge - Landing Page Atualizada para Deploy no Vercel

Este repositório contém o código-fonte do projeto SafeBridge, com a página inicial (Landing Page) atualizada conforme a solicitação do usuário.

## 🚀 Novidades na Landing Page

A página inicial (`app/page.jsx`) foi completamente reestruturada para atuar como uma Landing Page moderna, acolhedora e focada no impacto social do SafeBridge.

1.  **Banner Visual (Hero Section):**
    *   Utiliza o banner fornecido pelo usuário (`/public/banner_safebridge.jpg`).
    *   Mensagem de impacto: "SafeBridge - Tecnologia para gerar impacto social real".
2.  **Menu Intuitivo e Responsivo:**
    *   Menu de navegação fixo (sticky) com links âncora para as seções principais (`#sobre`, `#funcionalidades`, `#seguranca`).
    *   Design responsivo com menu *hamburger* para dispositivos móveis.
    *   CTAs (Chamadas para Ação) claras: "Registrar Denúncia" e "Entrar".
3.  **Conteúdo Acolhedor e Direcionado:**
    *   **Seção "Sobre":** Texto que estabelece confiança e acolhimento: "Sua voz importa. Nós ouvimos."
    *   **Seção "Funcionalidades":** Destaque para 6 pilares do SafeBridge: Acessibilidade, Segurança, Inclusão Digital, Geolocalização, Dashboard para ONGs e Resposta Rápida.
    *   **Seção "Segurança":** Ênfase na proteção de dados (LGPD/GDPR) e anonimato.
    *   **Seção "Emergência":** Fácil acesso aos telefones de emergência (190, 193, 180) e recursos de apoio (CVV, Maria da Penha).
4.  **Tecnologias Utilizadas:**
    *   **Next.js:** Framework React para o desenvolvimento da aplicação.
    *   **Tailwind CSS:** Para estilização rápida e responsiva.
    *   **TypeScript/JavaScript:** Linguagem de programação.

## ⚙️ Instruções de Deploy no Vercel

O projeto SafeBridge já é um aplicativo Next.js e está pré-configurado para deploy na plataforma Vercel, conforme indicado no arquivo `vercel.json` e no `README.md` original.

### Pré-requisitos

1.  Conta no [GitHub](https://github.com/).
2.  Conta no [Vercel](https://vercel.com/).
3.  O código-fonte do projeto (este repositório) deve estar em um repositório no seu GitHub.

### 1. Configuração do Repositório

Certifique-se de que o código atualizado (com a nova Landing Page) esteja no seu repositório GitHub.

### 2. Deploy via Vercel

O Vercel detecta automaticamente que o projeto é um aplicativo Next.js e configura o processo de build.

1.  **Importar Projeto:**
    *   Acesse o [Vercel Dashboard](https://vercel.com/dashboard).
    *   Clique em **"Add New..."** e depois em **"Project"**.
    *   Selecione o repositório do SafeBridge no seu GitHub.
2.  **Configurar Variáveis de Ambiente:**
    *   O arquivo `vercel.json` indica que o projeto utiliza variáveis de ambiente sensíveis para o funcionamento do backend (NextAuth, Prisma/Database, Supabase).
    *   **ATENÇÃO:** Para que o aplicativo funcione corretamente, você precisará configurar as seguintes variáveis de ambiente no Vercel, na seção **"Environment Variables"** do seu projeto:
        *   `DATABASE_URL`: URL de conexão com o banco de dados (PostgreSQL).
        *   `NEXTAUTH_SECRET`: Uma string longa e aleatória para segurança da sessão.
        *   `NEXTAUTH_URL`: A URL de produção do seu projeto (ex: `https://safebridge.vercel.app`).
        *   `SUPABASE_URL`: URL do seu projeto Supabase (se estiver usando).
        *   `SUPABASE_KEY`: Chave de serviço do Supabase (se estiver usando).
    *   **Para o deploy da Landing Page funcionar, as variáveis são necessárias, mesmo que você não use o backend imediatamente.** Você pode usar valores temporários para `DATABASE_URL` e `NEXTAUTH_SECRET` se o objetivo for apenas a Landing Page, mas o Next.js pode falhar no build se elas estiverem ausentes.
3.  **Deploy:**
    *   Clique em **"Deploy"**. O Vercel fará o build do projeto e o deploy.

### 3. Acesso

Após o deploy, o Vercel fornecerá a URL pública do seu projeto (ex: `https://safebridge-seunome.vercel.app`).

---

**Nota:** O projeto original já tinha uma configuração de CI/CD no GitHub Actions para deploy automático no Vercel (ver `/.github/workflows/ci-cd.yml` no repositório original). Se você mantiver essa configuração e as variáveis de ambiente no GitHub Secrets, o deploy será automático a cada push para a branch `main`.

**Variáveis de Ambiente Mínimas para Build (se o banco de dados não estiver configurado):**

Se você encontrar erros de build relacionados ao Prisma ou NextAuth, pode ser necessário garantir que as variáveis de ambiente estejam presentes, mesmo que com valores *placeholder* temporários, para que o processo de build do Next.js seja concluído.

```
DATABASE_URL="postgresql://user:password@host:port/database"
NEXTAUTH_SECRET="uma-chave-secreta-longa-e-aleatoria"
NEXTAUTH_URL="https://seu-app.vercel.app"
```
