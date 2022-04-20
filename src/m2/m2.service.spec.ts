import { Test, TestingModule } from '@nestjs/testing';
import { M2Service } from './m2.service';

describe('M2Service', () => {
  let service: M2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [M2Service],
    }).compile();

    service = module.get<M2Service>(M2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
