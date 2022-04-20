import { Test, TestingModule } from '@nestjs/testing';
import { M1Service } from './m1.service';

describe('M1Service', () => {
  let service: M1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [M1Service],
    }).compile();

    service = module.get<M1Service>(M1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
