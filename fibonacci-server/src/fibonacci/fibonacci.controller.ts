import { Controller, Get } from '@nestjs/common';
import { FibonacciService } from './fibonacci.service';

@Controller()
export class FibonacciController {
  constructor(private readonly fibonacciService: FibonacciService) {}

  @Get('current')
  getCurrent(): { value: number } {
    return { value: this.fibonacciService.getCurrent() };
  }

  @Get('previous')
  getPrevious(): { value: number } {
    return { value: this.fibonacciService.getPrevious() };
  }

  @Get('next')
  getNext(): { value: number } {
    return { value: this.fibonacciService.getNext() };
  }
}
