import { Query, Resolver } from '@nestjs/graphql'
import { Introduction } from './introduction.model'

@Resolver(of => Introduction)
export class IntroductionResolver {
  @Query(returns => Introduction)
  introduction() {
    return {
      title: 'Software Engineer - Frontend',
      description: 'Hi! I\'m Ferdi a Frontend developer'
    }
  }
}
