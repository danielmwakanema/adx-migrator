import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices/enums/transport.enum';
import { MicroserviceOptions } from '@nestjs/microservices/interfaces/microservice-configuration.interface';
import { AppModule } from './app.module';

async function bootstrap() {
  const service = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [process.env.MQ_HOST],
      queue: process.env.MQ_NAME,
      noAck: false,
      queueOptions: {
        durable: true
      },
    },
  });
  service.listen(() => console.log('Migration service is now listening...'));
}

bootstrap();
