import { Injectable } from '@nestjs/common';
import { CreateM2Dto } from './dto/create-m2.dto';
import { UpdateM2Dto } from './dto/update-m2.dto';

@Injectable()
export class M2Service {
  create(createM2Dto: CreateM2Dto) {
    return 'This action adds a new m2';
  }

  findAll() {
    return `This action returns all m2`;
  }

  findOne(id: number) {
    return `This action returns a #${id} m2`;
  }

  update(id: number, updateM2Dto: UpdateM2Dto) {
    return `This action updates a #${id} m2`;
  }

  remove(id: number) {
    return `This action removes a #${id} m2`;
  }
}
