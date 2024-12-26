import dotenv from "dotenv";
import { cleanEnv, host, port, str, testOnly } from "envalid";

//config function makes environment variables available throughout an application
dotenv.config();

export const env = cleanEnv(process.env, {
  NODE_ENV: str({ choices: ["development", "test", "production", "staging"] }),
  CORS_ORIGIN: str({ devDefault: testOnly("http://localhost:5173") }),
  HOST: host({ devDefault: testOnly("localhost") }),
  PORT: port({ devDefault: testOnly(8080) }),
  DATABASE_URL: str({ desc: "The MongoDB connection URI" }),
});
