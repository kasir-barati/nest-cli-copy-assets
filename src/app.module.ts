import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { M1Module } from './m1/m1.module';
import { M2Module } from './m2/m2.module';

@Module({
  imports: [M1Module, M2Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
