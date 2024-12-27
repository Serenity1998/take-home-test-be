import { PrismaClient } from '@prisma/client';
import { env } from './common/utils/envSetting';
import { app } from './server';

const prisma = new PrismaClient();

prisma
  .$connect()
  .then(() => console.log('Database connected successfully'))
  .catch((error: any) => console.error('Database connection failed:', error));

const server = app.listen(env.PORT, () => {
  const { NODE_ENV, HOST, PORT } = env;
  console.log(`Server (${NODE_ENV}) running on port http://${HOST}:${PORT}`);
});

const onCloseSignal = () => {
  console.log('sigint received, shutting down');
  server.close(() => {
    prisma.$disconnect();
    console.log('prisma disconnected');
    console.log('server closed');
    process.exit();
  });
  setTimeout(() => process.exit(1), 10000).unref(); // Force shutdown after 10s
};

process.on('SIGINT', onCloseSignal);
process.on('SIGTERM', onCloseSignal);
