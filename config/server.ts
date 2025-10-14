export default ({ env }) => {

  const ENV = env('NODE_ENV', 'development');

  return {
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  proxy: env.bool('IS_PROXIED', false),
  url: env('PUBLIC_URL', ENV === 'production' ? 'https://cms.dksinternational.com' : 'http://localhost:' + env.int('PORT', 1337)),
}
};
