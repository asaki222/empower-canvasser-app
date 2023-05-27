import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Ping Service in global App
  @Get('ping')
  getPing(): string {
    return this.appService.getPing();
  }
}
