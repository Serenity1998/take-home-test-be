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

- prisma
- src

```sh
/root
  │
  ├── prisma
  │   ├── schema.prisma       # Prisma schema file
  │   └── migrations/         # Prisma migration
  ├── src
  │   ├── api              # Api per functionality (Each functionality consists of router, service and controller)
  │   └── common
  │       ├── middlewares  # Middleware for handling unexpected requests and Prisma-specific error logging
  │       ├── types        # Type classes (etc. ServiceResponse for consistent API success and failure responses)
  │       └── utils        # Utility classes (environment settings, http handlers and logger classes)
  │   ├── index.ts         # Node.js server initilization with Prisma, environment settings, and handling shutdown.
  │   └── server.ts        # Express API with CORS, task routing, error handling, and observability functionalities decleration.
  │
  └── README.md
  

```

## Installation

1. Clone the repository

git clone https://github.com/YOUR-USERNAME/take-home-test-be.git
cd your-repo

2. Install dependencies

npm install

3. Set up your environment variables
Create a .env file in the root directory and configure it (templated included inside project env.template).

4. Initialize Prisma


npx prisma generate


## Running the Application

Development and Production

npm start

## API Endpoints

| Method | Endpoint      | Description           |
|--------|---------------|-----------------------|
| GET    | /tasks        | Retrieve all tasks    |
| POST   | /tasks        | Create new task       |
| GET    | /tasks/:id    | Retrieve single task  |
| PUT    | /tasks/:id    | Update single task    |
| DELETE | /tasks/:id    | Delete single task    |
