import { Body, Controller, Get, Post } from '@nestjs/common';
import { WebhookAppService } from './webhook-app.service';
import { HttpService } from '@nestjs/axios';

@Controller()
export class WebhookAppController {
  constructor(
    private readonly webhookAppService: WebhookAppService,
    private readonly httpService: HttpService,
  ) {}

  @Get()
  getHello(): string {
    return this.webhookAppService.getHello();
  }

  @Post('/order')
  createOrder(@Body() data: any): any {
    this.httpService
      .post(
        'http://localhost:5678/webhook/02711914-ca94-4369-85f3-672909d88277',
        data,
      )
      .subscribe({
        complete: () => {
          console.log('Completed!');
        },
        error: (err) => {
          console.log(err);
        },
      });

    return this.webhookAppService.createOrder(data);
  }
}
