import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class IntroductionResolver {
  @Query()
  introduction() {
    return {
      title: 'Software Engineer - Frontend',
      description: 'Hi! I\'m Ferdi a Frontend developer'
    }
  }
}
