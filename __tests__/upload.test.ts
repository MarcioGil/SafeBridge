import { describe, it, expect } from 'vitest';
import { occurrenceSchema } from '../lib/occurrenceSchema';

// Teste de upload de provas (simulação)
describe('Upload de Provas', () => {
  it('deve aceitar URLs válidas de arquivos', () => {
    const valid = {
      type: 'Violência',
      description: 'Descrição detalhada',
      proofs: ['https://storage.com/file1.jpg', 'https://storage.com/file2.png'],
    };
    expect(() => occurrenceSchema.parse(valid)).not.toThrow();
  });

  it('deve rejeitar proofs não como array de strings', () => {
    const invalid = {
      type: 'Violência',
      description: 'Descrição detalhada',
      proofs: [123, null],
    };
    expect(() => occurrenceSchema.parse(invalid)).toThrow();
  });
});
