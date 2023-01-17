import { Module } from '@nestjs/common';
import { IntroductionResolver } from './introduction.resolver';

@Module({
  providers: [IntroductionResolver]
})
export class IntroductionModule {}
