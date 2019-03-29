# Laravel Mix Boilerplate

A Laravel Mix boilerplate for building basic web applications with HTML, JavaScript and SASS.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- [nvm](https://github.com/creationix/nvm) >= 0.34.0
- [Node.js](https://nodejs.org/en/) = lts/dubnium (10.15.3)
- [yarn](https://yarnpkg.com) >= 1.15.2

### Installing

1.  Clone the repository from GitHub:

```bash
git clone https://github.com/mgoigfer/laravel-mix-boilerplate.git <project-name> && cd <project-name> && rm -rf .git
```

2.  Create a `.env` config file, and fill it with your development environment config:

```bash
cp .env.example .env
```

3.  Install [Node.js](https://nodejs.org/en/). The following `nvm` commands will install the Node.js version specified at `.nvmrc`:

```bash
nvm install && nvm use
```

4.  Install [yarn](https://yarnpkg.com) dependencies:

```bash
yarn install
```

## Running in development environment

### Development mode

```bash
yarn dev
```

### Development mode (with browsersync)

```bash
yarn watch
```

### Production mode

```bash
yarn prod
```

## Built With

- [Laravel Mix](https://github.com/JeffreyWay/laravel-mix) - An elegant wrapper around Webpack for the 80% use case

## Authors

- **Mikel Goig** - [mgoigfer](https://github.com/mgoigfer)
