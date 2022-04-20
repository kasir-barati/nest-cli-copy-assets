import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { M1Service } from './m1.service';
import { CreateM1Dto } from './dto/create-m1.dto';
import { UpdateM1Dto } from './dto/update-m1.dto';

@Controller('m1')
export class M1Controller {
  constructor(private readonly m1Service: M1Service) {}

  @Post()
  create(@Body() createM1Dto: CreateM1Dto) {
    return this.m1Service.create(createM1Dto);
  }

  @Get()
  findAll() {
    return this.m1Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.m1Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateM1Dto: UpdateM1Dto) {
    return this.m1Service.update(+id, updateM1Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.m1Service.remove(+id);
  }
}
