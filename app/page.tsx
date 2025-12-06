import Link from "next/link";

export default function Home() {
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
      <section className="w-full max-w-4xl px-4">
        {/* Canal de Contato e Denúncia Anônima */}
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-2 text-blue-600">Canal de Contato e Denúncia Anônima</h2>
          <form className="space-y-4 max-w-lg mx-auto p-4 bg-white rounded shadow" aria-label="Formulário de contato e denúncia anônima">
            <label htmlFor="mensagem" className="block font-medium">Mensagem ou denúncia (não precisa se identificar)</label>
            <textarea id="mensagem" name="mensagem" required minLength={10} className="w-full border rounded p-2" placeholder="Descreva sua situação, dúvida ou denúncia de forma segura e anônima"></textarea>
            <label htmlFor="contato" className="block font-medium">(Opcional) Email para resposta</label>
            <input id="contato" name="contato" type="email" className="w-full border rounded p-2" placeholder="Se quiser receber retorno, informe seu email" />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Enviar</button>
            <p className="text-xs text-gray-600 mt-2">Este canal é seguro e não armazena dados sensíveis. Você pode denunciar ou pedir orientação sem se identificar.</p>
          </form>
        </div>
        {/* Acessibilidade Digital e Braile */}
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-2 text-blue-600">Acessibilidade Digital e Braile</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-800">
            <li><strong>Compatível com leitores de tela:</strong> Todo o conteúdo pode ser lido por NVDA, JAWS, VoiceOver e TalkBack.</li>
            <li><strong>Navegação por teclado:</strong> Use Tab, Shift+Tab e Enter para acessar menus, botões e formulários.</li>
            <li><strong>Textos alternativos:</strong> Imagens e ícones possuem descrições para facilitar a compreensão.</li>
            <li><strong>Linguagem simples:</strong> As instruções e informações são escritas de forma clara e objetiva.</li>
            <li><strong>Exportação para braile:</strong> Após registrar uma ocorrência, é possível copiar o texto para impressão em braile usando impressoras compatíveis.</li>
            <li><strong>Tradução automática:</strong> O site pode ser traduzido automaticamente pelo navegador para outros idiomas.</li>
            <li><strong>Suporte:</strong> Em caso de dúvidas, peça ajuda a ONGs ou serviços públicos listados acima.</li>
          </ul>
        </div>
        {/* Orientações de Segurança e Direitos */}
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-2 text-blue-600">Orientações de Segurança e Direitos</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-800">
            <li><strong>Em situação de risco:</strong> Procure um local seguro, acione a polícia (190) ou peça ajuda a pessoas de confiança.</li>
            <li><strong>Direito ao anonimato:</strong> Você pode registrar denúncias sem se identificar.</li>
            <li><strong>Direito à proteção:</strong> Toda pessoa tem direito à proteção contra violência, discriminação e abuso.</li>
            <li><strong>Guarde evidências:</strong> Se possível, salve provas (mensagens, fotos, áudios) para facilitar o atendimento.</li>
            <li><strong>Busque apoio:</strong> ONGs, Defensoria Pública e serviços públicos podem orientar e proteger você.</li>
            <li><strong>Não se cale:</strong> Denunciar é um direito e pode salvar vidas.</li>
          </ul>
        </div>
        {/* Emergência */}
        <div className="mt-10 flex justify-center">
          <a href="tel:190" className="bg-red-600 text-white font-bold px-6 py-3 rounded-lg shadow-lg text-lg hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-red-600" aria-label="Ligar para emergência 190">
            🚨 Emergência: Ligue 190
          </a>
        </div>
        {/* Recursos de Apoio e Orientação */}
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-2 text-blue-600">Recursos de Apoio e Orientação</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-800">
            <li><strong>ONGs de apoio à mulher:</strong> <a href="https://mariadapenha.org.br/" target="_blank" rel="noopener" className="text-blue-700 underline">Instituto Maria da Penha</a>, <a href="https://www.agenciapatriciagalvao.org.br/" target="_blank" rel="noopener" className="text-blue-700 underline">Patrícia Galvão</a></li>
            <li><strong>Serviços públicos:</strong> <a href="https://www.gov.br/mdh/pt-br/assuntos/denuncias" target="_blank" rel="noopener" className="text-blue-700 underline">Ministério dos Direitos Humanos</a></li>
            <li><strong>Apoio psicológico:</strong> <a href="https://www.cvv.org.br/" target="_blank" rel="noopener" className="text-blue-700 underline">CVV - Centro de Valorização da Vida</a></li>
            <li><strong>Orientação jurídica gratuita:</strong> <a href="https://www.defensoria.sp.def.br/" target="_blank" rel="noopener" className="text-blue-700 underline">Defensoria Pública</a></li>
            <li><strong>Aplicativos oficiais:</strong> <a href="https://play.google.com/store/apps/details?id=br.gov.mj.sinesp.cidadao" target="_blank" rel="noopener" className="text-blue-700 underline">Sinesp Cidadão</a>, <a href="https://play.google.com/store/apps/details?id=br.gov.mj.sinesp.seguranca" target="_blank" rel="noopener" className="text-blue-700 underline">Sinesp Segurança</a></li>
            <li><strong>Canal de denúncia anônima:</strong> <a href="https://www.disquedenuncia.org.br/" target="_blank" rel="noopener" className="text-blue-700 underline">Disque Denúncia</a></li>
          </ul>
        </div>
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
            <section className="w-full max-w-4xl px-4">
              {/* Canal de Contato e Denúncia Anônima */}
              <div className="mt-10">
                <h2 className="text-xl font-bold mb-2 text-blue-600">Canal de Contato e Denúncia Anônima</h2>
                <form className="space-y-4 max-w-lg mx-auto p-4 bg-white rounded shadow" aria-label="Formulário de contato e denúncia anônima">
                  <label htmlFor="mensagem" className="block font-medium">Mensagem ou denúncia (não precisa se identificar)</label>
                  <textarea id="mensagem" name="mensagem" required minLength={10} className="w-full border rounded p-2" placeholder="Descreva sua situação, dúvida ou denúncia de forma segura e anônima"></textarea>
                  <label htmlFor="contato" className="block font-medium">(Opcional) Email para resposta</label>
                  <input id="contato" name="contato" type="email" className="w-full border rounded p-2" placeholder="Se quiser receber retorno, informe seu email" />
                  <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Enviar</button>
                  <p className="text-xs text-gray-600 mt-2">Este canal é seguro e não armazena dados sensíveis. Você pode denunciar ou pedir orientação sem se identificar.</p>
                </form>
              </div>
              {/* Acessibilidade Digital e Braile */}
              <div className="mt-10">
                <h2 className="text-xl font-bold mb-2 text-blue-600">Acessibilidade Digital e Braile</h2>
                <ul className="list-disc pl-6 mb-4 text-gray-800">
                  <li><strong>Compatível com leitores de tela:</strong> Todo o conteúdo pode ser lido por NVDA, JAWS, VoiceOver e TalkBack.</li>
                  <li><strong>Navegação por teclado:</strong> Use Tab, Shift+Tab e Enter para acessar menus, botões e formulários.</li>
                  <li><strong>Textos alternativos:</strong> Imagens e ícones possuem descrições para facilitar a compreensão.</li>
                  <li><strong>Linguagem simples:</strong> As instruções e informações são escritas de forma clara e objetiva.</li>
                  <li><strong>Exportação para braile:</strong> Após registrar uma ocorrência, é possível copiar o texto para impressão em braile usando impressoras compatíveis.</li>
                  <li><strong>Tradução automática:</strong> O site pode ser traduzido automaticamente pelo navegador para outros idiomas.</li>
                  <li><strong>Suporte:</strong> Em caso de dúvidas, peça ajuda a ONGs ou serviços públicos listados acima.</li>
                </ul>
              </div>
              {/* Orientações de Segurança e Direitos */}
              <div className="mt-10">
                <h2 className="text-xl font-bold mb-2 text-blue-600">Orientações de Segurança e Direitos</h2>
                <ul className="list-disc pl-6 mb-4 text-gray-800">
                  <li><strong>Em situação de risco:</strong> Procure um local seguro, acione a polícia (190) ou peça ajuda a pessoas de confiança.</li>
                  <li><strong>Direito ao anonimato:</strong> Você pode registrar denúncias sem se identificar.</li>
                  <li><strong>Direito à proteção:</strong> Toda pessoa tem direito à proteção contra violência, discriminação e abuso.</li>
                  <li><strong>Guarde evidências:</strong> Se possível, salve provas (mensagens, fotos, áudios) para facilitar o atendimento.</li>
                  <li><strong>Busque apoio:</strong> ONGs, Defensoria Pública e serviços públicos podem orientar e proteger você.</li>
                  <li><strong>Não se cale:</strong> Denunciar é um direito e pode salvar vidas.</li>
                </ul>
              </div>
              {/* Emergência */}
              <div className="mt-10 flex justify-center">
                <a href="tel:190" className="bg-red-600 text-white font-bold px-6 py-3 rounded-lg shadow-lg text-lg hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-red-600" aria-label="Ligar para emergência 190">
                  🚨 Emergência: Ligue 190
                </a>
              </div>
              {/* Recursos de Apoio e Orientação */}
              <div className="mt-10">
                <h2 className="text-xl font-bold mb-2 text-blue-600">Recursos de Apoio e Orientação</h2>
                <ul className="list-disc pl-6 mb-4 text-gray-800">
                  <li><strong>ONGs de apoio à mulher:</strong> <a href="https://mariadapenha.org.br/" target="_blank" rel="noopener" className="text-blue-700 underline">Instituto Maria da Penha</a>, <a href="https://www.agenciapatriciagalvao.org.br/" target="_blank" rel="noopener" className="text-blue-700 underline">Patrícia Galvão</a></li>
                  <li><strong>Serviços públicos:</strong> <a href="https://www.gov.br/mdh/pt-br/assuntos/denuncias" target="_blank" rel="noopener" className="text-blue-700 underline">Ministério dos Direitos Humanos</a></li>
                  <li><strong>Apoio psicológico:</strong> <a href="https://www.cvv.org.br/" target="_blank" rel="noopener" className="text-blue-700 underline">CVV - Centro de Valorização da Vida</a></li>
                  <li><strong>Orientação jurídica gratuita:</strong> <a href="https://www.defensoria.sp.def.br/" target="_blank" rel="noopener" className="text-blue-700 underline">Defensoria Pública</a></li>
                  <li><strong>Aplicativos oficiais:</strong> <a href="https://play.google.com/store/apps/details?id=br.gov.mj.sinesp.cidadao" target="_blank" rel="noopener" className="text-blue-700 underline">Sinesp Cidadão</a>, <a href="https://play.google.com/store/apps/details?id=br.gov.mj.sinesp.seguranca" target="_blank" rel="noopener" className="text-blue-700 underline">Sinesp Segurança</a></li>
                  <li><strong>Canal de denúncia anônima:</strong> <a href="https://www.disquedenuncia.org.br/" target="_blank" rel="noopener" className="text-blue-700 underline">Disque Denúncia</a></li>
                </ul>
              </div>
              {/* Telefones Úteis de Emergência */}
              <div className="mt-10">
                <h2 className="text-xl font-bold mb-2 text-blue-600">Telefones Úteis de Emergência</h2>
                <ul className="list-none pl-0 text-gray-800">
                  <li className="mb-1"><strong>Polícia:</strong> 190</li>
                  <li className="mb-1"><strong>Bombeiros:</strong> 193</li>
                  <li className="mb-1"><strong>Central de Atendimento à Mulher:</strong> 180</li>
                  <li className="mb-1"><strong>Disque Direitos Humanos:</strong> 100</li>
                  <li className="mb-1"><strong>Defesa Civil:</strong> 199</li>
                  <li className="mb-1"><strong>ONGs locais:</strong> Consulte o painel</li>
                </ul>
              </div>
              {/* Vídeo: Direitos Humanos Explicados */}
              <div className="mt-10">
                <h2 className="text-xl font-bold mb-2 text-blue-600">Vídeo: Direitos Humanos Explicados</h2>
                <div className="aspect-video w-full max-w-xl mx-auto rounded overflow-hidden shadow">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/1yqj8h2L6fM"
                    title="Direitos Humanos Explicados de forma simples"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="mt-2 text-gray-700 text-sm">Assista ao vídeo para entender seus direitos de forma clara e acessível. Este conteúdo é voltado para todas as pessoas, especialmente mulheres, minorias e quem busca proteção.</p>
              </div>
            </section>
          </main>
        );
