import { Test, TestingModule } from '@nestjs/testing';
import { WebhookAppController } from './webhook-app.controller';
import { WebhookAppService } from './webhook-app.service';
import { HttpModule } from '@nestjs/axios';

describe('WebhookAppController', () => {
  let webhookAppController: WebhookAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [WebhookAppController],
      providers: [WebhookAppService],
    }).compile();

    webhookAppController = app.get<WebhookAppController>(WebhookAppController);
  });

  describe('root', () => {
    it('should return data', () => {
      const data = {
        id: 1,
        name: 'order_1',
      };
      expect(webhookAppController.createOrder(data)).toBe(data);
    });
  });
});
