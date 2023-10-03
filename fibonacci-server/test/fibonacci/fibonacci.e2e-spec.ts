import { HttpStatus, INestApplication } from '@nestjs/common';
import { TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppBootstrapManager } from '../../src/app-bootstrap.manager';
import { FibonacciService } from '../../src/fibonacci/fibonacci.service';

describe('Fibonacci (e2e)', () => {
  let app: INestApplication;
  let moduleFixture: TestingModule;
  let fibonacciService: FibonacciService;

  beforeAll(async () => {
    moduleFixture = await AppBootstrapManager.getTestingModule();
    app = moduleFixture.createNestApplication();
    fibonacciService = moduleFixture.get<FibonacciService>(FibonacciService);
    AppBootstrapManager.setAppDefaults(app);
  });

  afterAll(async () => {
    await app.close();
  });

  beforeEach(async () => {
    fibonacciService['currentValue'] = 0;
    fibonacciService['previousValue'] = 0;
    await app.init();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('/current should return 0 initially', async () => {
    await request(app.getHttpServer())
      .get('/current')
      .then((response) => {
        expect(response.body.value).toBe(0);
      });
  });

  it('/next should return 1 after calling', async () => {
    await request(app.getHttpServer()).get('/next');
    await request(app.getHttpServer()).get('/next');
    await request(app.getHttpServer()).get('/next');
    await request(app.getHttpServer())
      .get('/next')
      .then((response) => {
        expect(response.body.value).toBe(3);
      });
  });

  it('/fibonacci/previous should throw BadRequestException when current value is 0', async () => {
    await request(app.getHttpServer()).get('/previous').expect(HttpStatus.BAD_REQUEST);
  });

  it('/fibonacci/previous should work', async () => {
    await request(app.getHttpServer()).get('/next');
    await request(app.getHttpServer()).get('/next');
    await request(app.getHttpServer())
      .get('/previous')
      .then((response) => {
        expect(response.body.value).toBe(1);
      });
  });
});
