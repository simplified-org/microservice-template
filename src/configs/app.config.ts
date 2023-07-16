import { registerAs } from '@nestjs/config';

export interface AppConfig {
  port: number;
  jwtSecret: string;
}

export const appConfig = registerAs(
  'app',
  (): AppConfig => ({
    port: parseInt(process.env.APP_PORT),
    jwtSecret: process.env.JWT_SECRET,
  }),
);
