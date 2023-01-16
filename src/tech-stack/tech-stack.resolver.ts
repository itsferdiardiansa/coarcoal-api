import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class TechStackResolver {
  @Query()
  techStacks() {
    return [
      {
        name: 'Typescript',
        url: 'http://',
        level: 'STRONG'
      },
      {
        name: 'Javascript',
        url: 'http://',
        level: 'STRONG'
      },
      {
        name: 'React',
        url: 'http://',
        level: 'STRONG'
      },
      {
        name: 'Vue',
        url: 'http://',
        level: 'STRONG'
      },
      {
        name: 'SQL',
        url: 'http://',
        lavel: 'MID'
      }
    ]
  }
}
