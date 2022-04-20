import { Module } from '@nestjs/common';
import { M1Service } from './m1.service';
import { M1Controller } from './m1.controller';

@Module({
  controllers: [M1Controller],
  providers: [M1Service]
})
export class M1Module {}
