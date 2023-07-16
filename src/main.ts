import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const PORT = configService.get<number>('app.port');
  const RMQ_URL = configService.get<string>('rmq.url');
  const RMQ_QUEUE = configService.get<string>('rmq.queue');

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [RMQ_URL],
      queue: RMQ_QUEUE,
    },
  });

  await app.startAllMicroservices();

  await app.listen(PORT);

  console.log(`\nExample service listening on port ${PORT}`);
}
bootstrap();
