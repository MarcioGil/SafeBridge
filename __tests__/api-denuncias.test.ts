import { describe, it, expect } from 'vitest';
import { occurrenceSchema } from '../lib/occurrenceSchema';

// Teste de API de denúncias (simulação de payload)
describe('API de Denúncias', () => {
  it('deve aceitar payload completo', () => {
    const payload = {
      type: 'Discriminação',
      description: 'Fui vítima de discriminação em local público.',
      city: 'Recife',
      latitude: -8.05,
      longitude: -34.9,
      proofs: ['https://storage.com/prova.jpg'],
      consent: true,
      anonymous: true,
    };
    expect(() => occurrenceSchema.parse(payload)).not.toThrow();
  });

  it('deve rejeitar payload sem tipo', () => {
    const payload = {
      description: 'Fui vítima de discriminação.',
    };
    expect(() => occurrenceSchema.parse(payload)).toThrow();
  });
});
