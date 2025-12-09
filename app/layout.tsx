
import './globals.css';
import type { ReactNode } from 'react';
import { AppProvider } from "../lib/AppContext";
import { reportWebVitals } from "../lib/webVitals";

if (typeof window !== "undefined") {
  reportWebVitals((metric) => {
    // Exemplo: enviar para analytics ou logar no console
    console.log("Web Vitals:", metric);
  });
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head />
      <body>
        {/* Banner visual no topo */}
        <div className="w-full bg-gradient-to-b from-blue-900 to-blue-100 flex justify-center items-center shadow-lg">
          <img
            src="/banner-topo.jpg"
            alt="Banner institucional SafeBridge"
            className="w-full max-w-5xl h-auto object-cover rounded-b-xl border-b-4 border-blue-700"
            style={{marginTop:0, marginBottom:0}}
          />
        </div>
        {/* Texto de apresentação */}
        <section className="w-full bg-white text-gray-900 px-4 py-6 flex flex-col items-center border-b border-blue-200">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-700 mb-2 text-center">SafeBridge: Proteção, Inclusão e Segurança para Todos</h1>
          <p className="max-w-3xl text-base md:text-lg text-center mb-2">
            O SafeBridge é uma plataforma digital criada para proteger, incluir e empoderar pessoas em situação de vulnerabilidade social. O aplicativo permite o registro seguro e anônimo de ocorrências, denúncias de violência e acesso a recursos de apoio, promovendo autonomia, privacidade e respeito.
          </p>
          <p className="max-w-3xl text-base md:text-lg text-center">
            <b>Para quem?</b> Cidadãos que desejam relatar ocorrências de forma anônima ou identificada, mulheres, pessoas LGBTQIA+, PCDs, indígenas, pretos, ONGs, profissionais de segurança, gestores públicos e todos que buscam um canal confiável para proteção e orientação.
          </p>
        </section>
        <header className="w-full bg-blue-700 text-white py-2 px-4 flex justify-between items-center shadow-md">
          <span className="font-bold text-2xl tracking-wide">SafeBridge</span>
          <nav aria-label="Menu principal">
            <ul className="flex gap-6 text-base">
              <li><a href="/" className="hover:underline">Início</a></li>
              <li><a href="/dashboard" className="hover:underline">Dashboard</a></li>
              <li><a href="/occurrence" className="hover:underline">Registrar Ocorrência</a></li>
              <li><a href="/privacy" className="hover:underline">Privacidade</a></li>
              <li><a href="/auth/signin" className="hover:underline">Entrar/Sair</a></li>
            </ul>
          </nav>
        </header>
        <div className="w-full bg-blue-50 text-blue-900 py-2 px-4 text-center text-sm shadow">
          <span>Bem-vindo ao SafeBridge! Use o menu acima para navegar. Para registrar uma ocorrência, clique em "Registrar Ocorrência". Em caso de emergência, ligue <b>190</b>.</span>
        </div>
        <AppProvider>
        {children}
        </AppProvider>
      </body>
    </html>
  );
}
