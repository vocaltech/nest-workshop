import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { WebhookAppModule } from './../src/webhook-app.module';

describe('WebhookAppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [WebhookAppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });
});
