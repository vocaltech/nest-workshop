import { Injectable } from '@nestjs/common';

@Injectable()
export class WebhookAppService {
  getHello(): string {
    return 'Hello World!';
  }

  createOrder = (data: any): any => {
    return data;
  };
}
