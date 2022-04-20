import { PartialType } from '@nestjs/mapped-types';
import { CreateM2Dto } from './create-m2.dto';

export class UpdateM2Dto extends PartialType(CreateM2Dto) {}
