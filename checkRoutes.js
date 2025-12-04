const http = require('http');

const routes = ['/dashboard', '/occurrence', '/privacy'];
const host = 'localhost';
const port = 3000;

function checkRoute(route) {
  return new Promise((resolve) => {
    const options = {
      host,
      port,
      path: route,
      method: 'GET',
    };
    const req = http.request(options, (res) => {
      resolve({ route, status: res.statusCode });
    });
    req.on('error', () => {
      resolve({ route, status: 'CONNECTION ERROR' });
    });
    req.end();
  });
}

(async () => {
  for (const route of routes) {
    const result = await checkRoute(route);
    console.log(`Route ${result.route}: Status ${result.status}`);
  }
})();
