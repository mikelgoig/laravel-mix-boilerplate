# Laravel Mix Boilerplate

A Laravel Mix boilerplate for building basic web applications with HTML, JavaScript and SASS.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- [nvm](https://github.com/creationix/nvm) >= 0.33.11
- [Node.js](https://nodejs.org/en/) = lts/carbon (8.11.3)
- [npm](https://www.npmjs.com/) = 6.1.0

### Installing

1.  Clone the repository from GitHub:

```bash
git clone https://github.com/mgoigfer/laravel-mix-boilerplate.git <project-name> && cd <project-name> && rm -rf .git
```

2.  Create a `.env` config file, and fill it with your development environment config:

```bash
cp .env.example .env
```

3.  Install [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/). The following `nvm` commands will install the Node.js version specified at `.nvmrc`:

```bash
nvm install && nvm use && npm install -g npm@6.1.0
```

4.  Install [npm](https://www.npmjs.com/) dependencies:

```bash
npm install
```

## Running in development environment

### Development mode

```bash
npm run dev
```

### Development mode (with browsersync)

```bash
npm run watch
```

### Production mode

```bash
npm run prod
```

## Built With

- [Laravel Mix](https://github.com/JeffreyWay/laravel-mix) - An elegant wrapper around Webpack for the 80% use case

## Authors

- **Mikel Goig** - [mgoigfer](https://github.com/mgoigfer)
