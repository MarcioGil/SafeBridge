import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0', // Substitua pelo seu DSN real
  tracesSampleRate: 1.0,
});

// Exemplo de captura de erro
export function captureError(error: Error) {
  Sentry.captureException(error);
}

console.log('Sentry configurado para alertas de erro.');
