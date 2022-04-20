import { Module } from '@nestjs/common';
import { M2Service } from './m2.service';
import { M2Controller } from './m2.controller';

@Module({
  controllers: [M2Controller],
  providers: [M2Service]
})
export class M2Module {}
