import { Resolver, Query } from '@nestjs/graphql'
import { AboutMe } from './about-me.model'

@Resolver((of) => AboutMe)
export class AboutMeResolver {
  @Query((returns) => AboutMe)
  aboutMe() {
    return {
      description: 'Software engineer with +5 years experience in software development and problem solving. Excellent person in all aspects of the software development cycle and end to end projects. Experienced in technology and writing code to create reliable and user-friendly systems that meet standard business requirements.'
    }
  }
}
