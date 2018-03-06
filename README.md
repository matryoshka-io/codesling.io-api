# Introduction

Codesling.io is typeracer for algo challenges – see who can solve the problem first!

## Get Started

### Install yarn

```bash
brew install yarn
```

### Install && Setup postgresql

```bash
brew install postgresql
brew services start postgresql
createuser root
createdb codesling
psql codesling
```

### Setup Environment

```bash
yarn
yarn buildEnv
yarn setup:rest-server
yarn setup:socket-server
yarn setup:services/coderunner-service
yarn db:setup:rest-server
```

### Start the Servers

```bash
yarn start # starts all back-end servers

# or, start them individually:

start:rest-server # starts rest-server
start:socket-server # starts rest-server
start:services/coderunner-service # starts rest-server
```
