const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api/', {
      target: 'http://localhost:2999',
      changeOrigin: true,
      ws: true,
      pathRewrite: {},
    })
  );
};
