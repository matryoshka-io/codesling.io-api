/**
 * These are lists of environment variables
 *
 * envBuild[directory] = [...environmentVariables]
 *
 * Build a script to create an .env file in each directory containing the following variables
 *
 * So anyone should just be able to run a command in their terminal to create the files!
 *
 * Example:
 * npm run buildEnv => ../rest-server/.env, ../socket-server/.env, etc.
 * yarn buildEnv => ../rest-server/.env, ../socket-server/.env, etc.
*/

module.exports = {
  'production': {
    "rest-server": [
      "DEBUG=false",
      "NODE_ENV=PRODUCTION",
      "PORT=3396",
      "LOCAL_USER=sling",
      "LOCAL_HOST=localhost",
      "LOCAL_DATABASE=codesling",
      "LOCAL_PASSWORD=slingtastic",
      "LOCAL_PORT=5432",
      "AWS_USER=",
      "AWS_HOST=",
      "AWS_DATABASE=",
      "AWS_PASSWORD=",
      "AWS_PORT=",
      "SALT_ROUNDS=10",
      "TOKEN_SECRET=codeslingapi"
    ],
    "socket-server": [
      "NODE_ENV=PRODUCTION",
      "DEBUG=TRUE",
      "HOST=https://codesling.fun",
      "PORT=4155",
      "REST_SERVER_URL=https://codesling.fun/api",
      "CODERUNNER_SERVICE_URL=https://codesling.fun/coderunner",
      "TOKEN_SECRET=codeslinger"
    ],
    "services/coderunner-service": [
      "NODE_ENV=PRODUCTION",
      "DEBUG=FALSE",
      "HOST=https://codesling.fun",
      "PORT=4000",
      "REST_SERVER_URL=https://codesling.fun/api",
      "SOCKET_SERVER_URL=https://codesling.fun/sockets"
    ]
  },
  'development': {
    "rest-server": [
      "DEBUG=TRUE",
      "NODE_ENV=test",
      "PORT=3396",
      "LOCAL_USER=root",
      "LOCAL_HOST=localhost",
      "LOCAL_DATABASE=codesling",
      "LOCAL_PASSWORD=",
      "LOCAL_PORT=5432",
      "AWS_USER=",
      "AWS_HOST=",
      "AWS_DATABASE=",
      "AWS_PASSWORD=",
      "AWS_PORT=",
      "SALT_ROUNDS=10",
      "TOKEN_SECRET=codeslingapi"
    ],
    "socket-server": [
      "NODE_ENV=DEVELOPMENT",
      "DEBUG=TRUE",
      "HOST=http://localhost",
      "PORT=4155",
      "REST_SERVER_URL=http://localhost:4990",
      "CODERUNNER_SERVICE_URL=http://localhost:4000",
      "TOKEN_SECRET=codeslinger"
    ],
    "services/coderunner-service": [
      "NODE_ENV=DEVELOPMENT",
      "DEBUG=TRUE",
      "HOST=http://localhost",
      "PORT=4000",
      "REST_SERVER_URL=http://localhost:3396",
      "SOCKET_SERVER_URL=http://localhost:4155"
    ]
  }
};
