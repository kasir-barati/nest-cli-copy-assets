import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { M2Service } from './m2.service';
import { CreateM2Dto } from './dto/create-m2.dto';
import { UpdateM2Dto } from './dto/update-m2.dto';

@Controller('m2')
export class M2Controller {
  constructor(private readonly m2Service: M2Service) {}

  @Post()
  create(@Body() createM2Dto: CreateM2Dto) {
    return this.m2Service.create(createM2Dto);
  }

  @Get()
  findAll() {
    return this.m2Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.m2Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateM2Dto: UpdateM2Dto) {
    return this.m2Service.update(+id, updateM2Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.m2Service.remove(+id);
  }
}
