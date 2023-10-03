import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class FibonacciService {
  private currentValue;
  private previousValue;

  constructor() {
    this.currentValue = 0;
    this.previousValue = 0;
  }

  getCurrent(): number {
    return this.currentValue;
  }

  getPrevious(): number {
    if (this.currentValue === 0) {
      throw new BadRequestException('Current value is 0');
    } else {
      const temp = this.currentValue;
      this.currentValue = this.previousValue;
      this.previousValue = temp - this.previousValue;
    }

    return this.currentValue;
  }

  getNext(): number {
    if (this.currentValue === 0) {
      this.currentValue = 1;
    } else {
      const temp = this.currentValue;
      this.currentValue = this.currentValue + this.previousValue;
      this.previousValue = temp;
    }

    return this.currentValue;
  }
}
