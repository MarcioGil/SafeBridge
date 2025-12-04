import { describe, it, expect } from 'vitest';
import { occurrenceSchema } from '../lib/occurrenceSchema';

// Teste de cadastro de ocorrência válido

describe('Cadastro de Ocorrência', () => {
  it('deve aceitar ocorrência válida', () => {
    const valid = {
      type: 'Violência',
      description: 'Descrição detalhada do caso',
      city: 'São Paulo',
      latitude: -23.5,
      longitude: -46.6,
      proofs: ['https://storage.com/file.jpg'],
      consent: true,
      anonymous: false,
    };
    expect(() => occurrenceSchema.parse(valid)).not.toThrow();
  });

  it('deve rejeitar ocorrência sem descrição', () => {
    const invalid = {
      type: 'Violência',
      description: '',
    };
    expect(() => occurrenceSchema.parse(invalid)).toThrow();
  });
});
