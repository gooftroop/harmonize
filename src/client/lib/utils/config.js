// TODO this sucks - find another way
const config = {
  auth: {
    auth0: {
      domain: 'harmonize.auth0.com',
      clientID: 'bpoFOeoQ2M7xWlVng4yHm2JUecSZe2NE',
      redirectUri: 'http://localhost:3000/callback',
      audience: 'https://harmonize.auth0.com/userinfo',
      responseType: 'token id_token',
      scope: 'openid'
    }
  }
};

export default config;
