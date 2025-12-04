import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '../../../lib/prisma';
import { compare } from 'bcryptjs';

export default NextAuth({
  adapter: PrismaAdapter(prisma), // No change here
  providers: [
    CredentialsProvider({
      name: 'Credenciais',
      credentials: {
        email: { label: 'Email', type: 'email', required: true },
        password: { label: 'Senha', type: 'password', required: true },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({ where: { email: credentials?.email } });
        if (user && credentials?.password && await compare(credentials.password, (user as any).password)) {
          return user;
        }
        return null;
      },
    }),
    // Adicione provedores sociais aqui (Google, GitHub, etc.)
  ],
  session: {
    strategy: 'jwt',
    maxAge: 15 * 60, // 15 minutos
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = (user as any).id;
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        (session.user as any).id = token.id;
        (session.user as any).role = token.role;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
