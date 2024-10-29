# Personnel Dispatching application

It's a code challenging application

## Step 1

Install nodejs version 20.18.0 on windows/Mac/Linux

## Step 2

Navigate to Application folder and build and run docker from provided dockerfile

```sh
docker build -t postgres-image .
docker run -d --name postgres_container -e POSTGRES_PASSWORD=yourpassword  postgres-image
```

## Step 3

create .env file in the root of the project
_Example:_

```sh
# Database
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=local1234
DB_NAME=postgres
DB_PORT=5432

# Application
APP_PORT=6600
```

## Step 4

Navigate to root of application and trigger these command

```sh
npm install
npm run dev
```

## Step 5

check config/router.ts: you can fine all API there

## Step 6

Because the swagger is added for api document. You can access it by http://localhost:PortNumber/api-docs

Example:

```sh
http://localhost:6600/api-docs
```

Good lock!
