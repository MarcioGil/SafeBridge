"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="font-bold text-2xl bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                SafeBridge
              </span>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
              <li>
                <a href="#sobre" className="hover:text-cyan-600 transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#funcionalidades" className="hover:text-cyan-600 transition-colors">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#seguranca" className="hover:text-cyan-600 transition-colors">
                  Segurança
                </a>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-cyan-600 transition-colors">
                  Privacidade
                </Link>
              </li>
            </ul>

            {/* CTA Buttons */}
            <div className="hidden md:flex gap-3">
              <Link
                href="/auth/signin"
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Entrar
              </Link>
              <Link
                href="/occurrence"
                className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all"
              >
                Registrar Denúncia
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <a
                href="#sobre"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                Sobre
              </a>
              <a
                href="#funcionalidades"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                Funcionalidades
              </a>
              <a
                href="#seguranca"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                Segurança
              </a>
              <Link
                href="/privacy"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                Privacidade
              </Link>
              <Link
                href="/auth/signin"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                Entrar
              </Link>
              <Link
                href="/occurrence"
                className="block px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg"
              >
                Registrar Denúncia
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="relative w-full h-96 md:h-[500px] overflow-hidden">
        <Image
          src="/banner_safebridge.jpg"
          alt="SafeBridge - Tecnologia para gerar impacto social real"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              SafeBridge
            </h1>
            <p className="text-lg md:text-xl font-semibold">
              Tecnologia para gerar impacto social real
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Sobre Section */}
        <section id="sobre" className="mb-16 scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Sua voz importa. Nós ouvimos.
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                O SafeBridge é uma plataforma segura, acessível e inclusiva criada para você denunciar violência, discriminação e abuso sem medo. Aqui, sua segurança é nossa prioridade máxima.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Seja você uma vítima buscando proteção, uma testemunha querendo fazer a diferença, ou uma organização trabalhando por justiça social, o SafeBridge oferece as ferramentas que você precisa para agir.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/occurrence"
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all text-center font-semibold"
                >
                  Registrar Denúncia Agora
                </Link>
                <Link
                  href="/dashboard"
                  className="px-6 py-3 border-2 border-cyan-500 text-cyan-600 rounded-lg hover:bg-cyan-50 transition-colors text-center font-semibold"
                >
                  Ver Dashboard
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Proteção Garantida
              </h3>
              <p className="text-gray-700">
                Registre denúncias de forma anônima, segura e com total proteção dos seus dados pessoais.
              </p>
            </div>
          </div>
        </section>

        {/* Funcionalidades Section */}
        <section id="funcionalidades" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Funcionalidades Principais
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Acessibilidade Global
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Interface totalmente acessível para leitores de tela, navegação por teclado e suporte a múltiplos idiomas. Todos têm direito de ser ouvidos.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Segurança Máxima
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Criptografia de ponta a ponta, anonimato garantido e conformidade com LGPD/GDPR. Seus dados estão seguros conosco.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Inclusão Digital
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Integração com ONGs, serviços de emergência e órgãos públicos para garantir que sua denúncia chegue aos responsáveis.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Geolocalização Inteligente
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Registre a localização do incidente para facilitar o atendimento e a resposta rápida das autoridades competentes.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Dashboard para ONGs
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Ferramentas avançadas para organizações gerenciarem denúncias, gerar relatórios e medir impacto social.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Resposta Rápida
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Integração com serviços de emergência (SAMU, Bombeiros, Polícia) para atendimento imediato quando necessário.
              </p>
            </div>
          </div>
        </section>

        {/* Segurança Section */}
        <section id="seguranca" className="mb-16 scroll-mt-20 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Sua Segurança é Nossa Prioridade
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ✅ Proteção de Dados
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-600 font-bold">•</span>
                  <span>Criptografia end-to-end para todas as comunicações</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-600 font-bold">•</span>
                  <span>Conformidade total com LGPD e GDPR</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-600 font-bold">•</span>
                  <span>Opção de denúncia completamente anônima</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-600 font-bold">•</span>
                  <span>Nenhum dado sensível armazenado sem consentimento</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ✅ Suporte Contínuo
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-600 font-bold">•</span>
                  <span>Orientação sobre direitos humanos e proteção legal</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-600 font-bold">•</span>
                  <span>Conexão com ONGs e serviços de apoio</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-600 font-bold">•</span>
                  <span>Acompanhamento do status da sua denúncia</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-600 font-bold">•</span>
                  <span>Suporte 24/7 para emergências</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Pronto para fazer a diferença?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Sua denúncia pode salvar vidas. Registre de forma segura, anônima e com toda a proteção que você merece.
          </p>
          <Link
            href="/occurrence"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-xl transition-all text-lg font-semibold"
          >
            Registrar Denúncia Agora
          </Link>
        </section>

        {/* Emergency Numbers */}
        <section className="bg-red-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
            🚨 Em Situação de Emergência?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-700 mb-4">
                Se você está em risco imediato, procure um local seguro e acione os serviços de emergência:
              </p>
              <div className="space-y-3">
                <a
                  href="tel:190"
                  className="block px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold text-center"
                >
                  📞 Polícia: 190
                </a>
                <a
                  href="tel:193"
                  className="block px-4 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold text-center"
                >
                  🚒 Bombeiros: 193
                </a>
                <a
                  href="tel:180"
                  className="block px-4 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors font-semibold text-center"
                >
                  👩 Central Mulher: 180
                </a>
              </div>
            </div>
            <div>
              <p className="text-gray-700 mb-4">
                Recursos de apoio e orientação:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <a
                    href="https://www.cvv.org.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 hover:underline font-semibold"
                  >
                    💙 CVV - Centro de Valorização da Vida
                  </a>
                </li>
                <li>
                  <a
                    href="https://mariadapenha.org.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 hover:underline font-semibold"
                  >
                    👩‍⚖️ Instituto Maria da Penha
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.agenciapatriciagalvao.org.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 hover:underline font-semibold"
                  >
                    📢 Agência Patrícia Galvão
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.disquedenuncia.org.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 hover:underline font-semibold"
                  >
                    📞 Disque Denúncia
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="text-center py-12 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Você não está sozinho(a)
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            O SafeBridge conecta você com recursos, proteção e justiça. Sua denúncia importa e pode fazer a diferença na vida de outras pessoas também.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/occurrence"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all font-semibold"
            >
              Registrar Denúncia
            </Link>
            <Link
              href="/dashboard"
              className="px-6 py-3 border-2 border-cyan-500 text-cyan-600 rounded-lg hover:bg-cyan-50 transition-colors font-semibold"
            >
              Acessar Dashboard
            </Link>
            <Link
              href="/auth/signin"
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
            >
              Entrar
            </Link>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">SafeBridge</h4>
              <p className="text-sm">
                Tecnologia para gerar impacto social real. Denúncias seguras, acessíveis e inclusivas.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#sobre" className="hover:text-white transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#funcionalidades" className="hover:text-white transition-colors">
                    Funcionalidades
                  </a>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacidade
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Ações Rápidas</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/occurrence" className="hover:text-white transition-colors">
                    Registrar Denúncia
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="hover:text-white transition-colors">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/auth/signin" className="hover:text-white transition-colors">
                    Entrar
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Emergência</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="tel:190" className="hover:text-white transition-colors">
                    Polícia: 190
                  </a>
                </li>
                <li>
                  <a href="tel:193" className="hover:text-white transition-colors">
                    Bombeiros: 193
                  </a>
                </li>
                <li>
                  <a href="tel:180" className="hover:text-white transition-colors">
                    Central Mulher: 180
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>
              © 2025 SafeBridge. Todos os direitos reservados. | Desenvolvido por{" "}
              <a
                href="https://github.com/MarcioGil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300"
              >
                Márcio Gil
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
