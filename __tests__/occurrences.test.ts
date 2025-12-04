import { describe, it, expect } from 'vitest';
import { occurrenceSchema } from '../app/api/occurrences/route';

describe('Occurrence API', () => {
  it('valida ocorrência válida', () => {
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

  it('rejeita descrição curta', () => {
    const invalid = {
      type: 'Violência',
      description: 'Curto',
    };
    expect(() => occurrenceSchema.parse(invalid)).toThrow();
  });
});
