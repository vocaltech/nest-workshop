import { Module } from '@nestjs/common';
import { WebhookAppController } from './webhook-app.controller';
import { WebhookAppService } from './webhook-app.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [WebhookAppController],
  providers: [WebhookAppService],
})
export class WebhookAppModule {}
