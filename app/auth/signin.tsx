import { signIn } from 'next-auth/react';

export default function SignInPage() {
  return (
    <main className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Entrar</h1>
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
    </main>
  );
}
