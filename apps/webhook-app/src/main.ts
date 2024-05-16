import { NestFactory } from '@nestjs/core';
import { WebhookAppModule } from './webhook-app.module';

async function bootstrap() {
  const app = await NestFactory.create(WebhookAppModule);
  await app.listen(3002);
}
bootstrap();
