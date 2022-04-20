import { PartialType } from '@nestjs/mapped-types';
import { CreateM1Dto } from './create-m1.dto';

export class UpdateM1Dto extends PartialType(CreateM1Dto) {}
