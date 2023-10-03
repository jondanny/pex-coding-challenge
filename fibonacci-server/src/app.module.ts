import { Module } from '@nestjs/common';
import { FibonacciModule } from './fibonacci/fibonacci.module';

@Module({
  imports: [FibonacciModule],
})
export class AppModule {}
