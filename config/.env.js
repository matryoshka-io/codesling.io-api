const envBuild = {
  'rest-server': [
    'DEBUG=TRUE',
    'NODE_ENV=test',
    'PORT=3396',
    'LOCAL_USER=root',
    'LOCAL_HOST=localhost',
    'LOCAL_DATABASE=codesling',
    'LOCAL_PASSWORD=',
    'LOCAL_PORT=5432',
    'AWS_USER=',
    'AWS_HOST=',
    'AWS_DATABASE=',
    'AWS_PASSWORD=',
    'AWS_PORT=',
    'SALT_ROUNDS=10',
    'TOKEN_SECRET=codeslingapi'
  ],
  'socket-server': [
    'NODE_ENV=DEVELOPMENT',
    'DEBUG=TRUE',
    'HOST=http://localhost',
    'PORT=4155',
    'REST_SERVER_URL=http://localhost:4990',
    'CODERUNNER_SERVICE_URL=http://localhost:4000',
    'TOKEN_SECRET=codeslinger'
  ],
  'services/coderunner-service': [
    'NODE_ENV=DEVELOPMENT',
    'DEBUG=TRUE',
    'HOST=http://localhost',
    'PORT=4000',
    'REST_SERVER_URL=http://localhost:3396',
    'SOCKET_SERVER_URL=http://localhost:4155'
  ]
};

module.exports = envBuild;
