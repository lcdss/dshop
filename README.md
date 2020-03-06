# DSHOP
DSHOP allows you to search products from different endpoints (stores) and mark the ones you liked the most as favorites.

## Quick Start

You will need to have Docker and Docker Compose installed in your system to be able to follow the steps below:

- Clone the git repository
  ```bash
  $ git clone git@gitlab.com:lcdss/dshop.git
  ```
- Access the project root directory

  ```bash
  $ cd dshop
  ```

- Copy the example environment file

  ```bash
  $ cp .env.example .env
  ```

- Push, build and run the docker containers

  ```bash
  $ docker-compose up -d
  ```

- Access the server container

  ```bash
  $ docker-compose exec server sh
  ```

- Generate a secret for the JWT and update the `.env` file with it

  ```bash
  $ rails secret
  ```

- Install the server app dependencies

  ```bash
  $ bundle
  ```

- Run the server app - It'll be available at http://api.dshop.local

  ```bash
  $ rails s -b 0.0.0.0
  ```

- In another terminal, access the client container

  ```bash
  $ docker-compose exec client sh
  ```

- Install the client dependencies

  ```bash
  $ yarn
  ```

- Run the client server - It'll be available at http://dshop.local

  ```bash
  $ yarn start
  ```

- Add the api and client hostnames to your system's host file (_needs root access_)
  ```bash
  $ echo "127.0.0.1 dshop.local" >> /etc/hosts
  $ echo "127.0.0.1 api.dshop.local" >> /etc/hosts
  ```

## DEMO

**API**: https://api-dshop.herokuapp.com

**Client**: https://client-dshop.herokuapp.com

**API DOCS**: https://documenter.getpostman.com/view/283907/SzRw3XRR

## TODO

- Paginate products (client)
- Search/filter and sort products (client)
- Favorite products (client and server?)
- Invalidate JWT tokens after logout
- Customize babel and postcss configuration to reduce the bundle size

## What was used?

- [Rails](https://rubyonrails.org/)
- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Ant Design](https://github.com/ant-design/ant-design)
- [Easy Peasy](https://github.com/ctrlplusb/easy-peasy)
- [Axios](https://github.com/axios/axios)
