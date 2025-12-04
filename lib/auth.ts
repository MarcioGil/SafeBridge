// Arquivo base para autenticação NextAuth ou JWT custom
// Adicione configurações conforme necessário

export const authConfig = {
  providers: [], // Adicione provedores conforme necessário
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 15 * 60, // 15 minutos
  },
  // ...outras configurações
};
