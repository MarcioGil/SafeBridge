import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Página não encontrada</h1>
      <p className="mb-6">A página que você procura não existe.</p>
      <Link href="/" className="text-blue-600 underline">Voltar para a página inicial</Link>
    </div>
  );
}
