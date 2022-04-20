import { Injectable } from '@nestjs/common';
import { CreateM1Dto } from './dto/create-m1.dto';
import { UpdateM1Dto } from './dto/update-m1.dto';

@Injectable()
export class M1Service {
  create(createM1Dto: CreateM1Dto) {
    return 'This action adds a new m1';
  }

  findAll() {
    return `This action returns all m1`;
  }

  findOne(id: number) {
    return `This action returns a #${id} m1`;
  }

  update(id: number, updateM1Dto: UpdateM1Dto) {
    return `This action updates a #${id} m1`;
  }

  remove(id: number) {
    return `This action removes a #${id} m1`;
  }
}
