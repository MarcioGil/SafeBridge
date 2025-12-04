import { signIn } from 'next-auth/react';
import Link from "next/link";

export default function SignInPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-start">
      <nav className="w-full bg-blue-600 text-white py-3 px-4 flex justify-between items-center shadow">
        <span className="font-bold text-xl">SafeBridge</span>
        <ul className="flex gap-6 text-base">
          <li><Link href="/dashboard" className="hover:underline">Dashboard</Link></li>
          <li><Link href="/occurrence" className="hover:underline">Registrar Ocorrência</Link></li>
          <li><Link href="/privacy" className="hover:underline">Privacidade</Link></li>
          <li><Link href="/auth/signin" className="hover:underline">Entrar/Sair</Link></li>
        </ul>
      </nav>
      <section className="max-w-md w-full mx-auto mt-12 p-6 bg-gray-50 rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-blue-700">Entrar</h1>
        <form
          className="space-y-4"
          aria-label="Formulário de login"
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const email = (form.elements.namedItem('email') as HTMLInputElement).value;
            const password = (form.elements.namedItem('password') as HTMLInputElement).value;
            await signIn('credentials', { email, password, callbackUrl: '/' });
          }}
        >
          <label htmlFor="email" className="block font-medium">Email</label>
          <input id="email" name="email" type="email" required className="w-full border rounded p-2" />

          <label htmlFor="password" className="block font-medium">Senha</label>
          <input id="password" name="password" type="password" required className="w-full border rounded p-2" />

          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded focus-visible:outline-2 focus-visible:outline-blue-600">Entrar</button>
        </form>
      </section>
    </main>
  );
}
