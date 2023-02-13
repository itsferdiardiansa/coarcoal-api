import { Module } from '@nestjs/common';
import { LinksResolver } from './links.resolver';

@Module({
  providers: [LinksResolver]
})
export class LinksModule {}
