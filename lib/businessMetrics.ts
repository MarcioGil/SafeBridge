// Exemplo de coleta de métricas de funil/conversão

let funnelMetrics = {
  visits: 0,
  registrations: 0,
  occurrences: 0,
  uploads: 0,
};

export function trackVisit() {
  funnelMetrics.visits++;
}

export function trackRegistration() {
  funnelMetrics.registrations++;
}

export function trackOccurrence() {
  funnelMetrics.occurrences++;
}

export function trackUpload() {
  funnelMetrics.uploads++;
}

export function getFunnelMetrics() {
  return { ...funnelMetrics };
}
