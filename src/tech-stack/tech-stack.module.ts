import { Module } from '@nestjs/common';
import { TechStackResolver } from './tech-stack.resolver';

@Module({
  providers: [TechStackResolver]
})
export class TechStackModule {}
