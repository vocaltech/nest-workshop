import { Test, TestingModule } from '@nestjs/testing';
import { WebhookAppController } from './webhook-app.controller';
import { WebhookAppService } from './webhook-app.service';

describe('WebhookAppController', () => {
  let webhookAppController: WebhookAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [WebhookAppController],
      providers: [WebhookAppService],
    }).compile();

    webhookAppController = app.get<WebhookAppController>(WebhookAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(webhookAppController.getHello()).toBe('Hello World!');
    });
  });
});
