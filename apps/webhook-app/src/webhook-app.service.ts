import { Injectable } from '@nestjs/common';

@Injectable()
export class WebhookAppService {
  createOrder = (data: any): any => {
    return data;
  };
}
