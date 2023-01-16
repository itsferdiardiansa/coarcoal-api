import { Query } from '@nestjs/graphql'

export class AboutMeResolver {
  @Query()
  aboutMe() {
    return {
      description: 'This is first description...'
    }
  }
}
