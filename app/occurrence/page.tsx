import Link from "next/link";
import AccessibleButton from '../../components/AccessibleButton';

export default function OccurrencePage() {
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
      <h1 className="text-2xl font-bold mb-4">Nova Ocorrência</h1>
      <form className="space-y-4" aria-label="Formulário de denúncia">
        <label htmlFor="type" className="block font-medium">Tipo</label>
        <input id="type" name="type" type="text" required className="w-full border rounded p-2" />

        <label htmlFor="description" className="block font-medium">Descrição</label>
        <textarea id="description" name="description" required minLength={10} className="w-full border rounded p-2" />

        <label htmlFor="city" className="block font-medium">Cidade</label>
        <input id="city" name="city" type="text" className="w-full border rounded p-2" />

        <label htmlFor="file" className="block font-medium">Provas (jpg/png/pdf/mp3, máx. 10MB)</label>
        <input id="file" name="file" type="file" accept=".jpg,.jpeg,.png,.pdf,.mp3" className="w-full" />

        <label className="flex items-center gap-2">
          <input type="checkbox" name="consent" /> Concordo com o uso dos dados
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" name="anonymous" /> Enviar como anônimo
        </label>

        <AccessibleButton type="submit">Enviar</AccessibleButton>
      </form>
      </section>
    </main>
  );
}
