import AccessibleButton from '../../components/AccessibleButton';

export default function OccurrencePage() {
  return (
    <main className="max-w-xl mx-auto p-4">
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
    </main>
  );
}
