import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { FibonacciService } from './fibonacci.service';

describe('FibonacciService', () => {
  let service: FibonacciService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FibonacciService],
    }).compile();

    service = module.get<FibonacciService>(FibonacciService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getCurrent', () => {
    it('should return the current value', () => {
      const result = service.getCurrent();
      expect(result).toBe(0);
    });
  });

  describe('getNext', () => {
    it('should return the next value in the sequence', () => {
      const result = service.getNext();
      expect(result).toBe(1);
    });
  });

  describe('getPrevious', () => {
    it('should throw BadRequestException if current value is 0', () => {
      expect(() => {
        service.getPrevious();
      }).toThrowError(BadRequestException);
    });

    it('should return the previous value in the sequence', () => {
      service.getNext(); // Move to 1
      const result = service.getPrevious();
      expect(result).toBe(0);
    });
  });
});
