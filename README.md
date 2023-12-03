# Simple Node Login Service

## Description

A simple login service implementation using Node.js.

## Features

- **Registration**: Users can create a new account.
- **Login**: Users can log in to their account.
- **Logging**: Integration of logging using Winston and Morgan.

## Installation and Running

### System Requirements

Before installing and running the project, ensure the following software is installed on your system:
```
node 16.17.1
npm 8.15.0
```

### Installation

```
npm install
```

### Configuration

1. Create a `.env` file at the root of the project.
2. Add the following content to the `.env` file:
   
    ```sh
    DB_HOST= # hostname
    DB_PORT= # port
    DB_USER= # username
    DB_PASSWORD= # password
    DB_DATABASE= # database name
    ```
3. Execute table.sql in the docs folder.

### Running

```sh
npm run start
```
