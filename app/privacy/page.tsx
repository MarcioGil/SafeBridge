import Link from "next/link";
export default function PrivacyPage() {
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
      <section className="max-w-2xl w-full mx-auto mt-12 p-6 bg-gray-50 rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-blue-700">Privacidade</h1>
        <p className="mb-6">Veja como protegemos seus dados e garantimos anonimato.</p>
        {/* ...conteúdo de privacidade... */}
      </section>
    </main>
  );
}
