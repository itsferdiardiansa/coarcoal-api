import { Module } from '@nestjs/common';
import { AboutMeResolver } from './about-me.resolver'

@Module({
  providers: [AboutMeResolver]
})
export class AboutMeModule {}
