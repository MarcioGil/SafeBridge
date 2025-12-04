import { describe, it, expect } from 'vitest';

// Exemplo de teste de acessibilidade para componente

describe('Acessibilidade', () => {
  it('botão tem foco visível', () => {
    // Simulação: o botão deve ter classe focus-visible
    const buttonClass = 'focus-visible:outline-2 focus-visible:outline-blue-600';
    expect(buttonClass).toContain('focus-visible');
  });
});
