# Take-home test Backend repository

This is a backend application built with Express.js and Prisma as the ORM. The app is configured to use environment variables for sensitive configurations.

## Features
- RESTful API endpoints
- Database interaction using Prisma
- Environment variable configuration
- Easy setup and scalability

## Requirements
Node.js >= 20.x
npm or yarn
A supported database MySQL
Prisma CLI installed globally (optional)

## Main structures:

- admin-dashboard
- candidates
- clients

```sh
/root
  │
  ├── prisma
  │
  ├── src
  │   └── api
  │         └── Api per functionality (Each functionality consists of router, service and controller)
  │   └── common
  │       └── middlewares
  │             └── Middleware for handling unexpected requests and Prisma-specific error logging
  │       └── types
  │             └── Type classes (etc. ServiceResponse for consistent API success and failure responses)
  │       └── utils
  │             └── Utility classes (environment settings, http handlers and logger classes)
  │   └── index.ts
  │       └── Node.js server initilization with Prisma, environment settings, and handling shutdown.
  │   └── server.ts
  │       └── Express API with CORS, task routing, error handling, and observability functionalities decleration.
  │
  └── README.md
  

```
#$
