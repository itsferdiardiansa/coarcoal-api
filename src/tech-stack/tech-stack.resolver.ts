import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class TechStackResolver {
  @Query()
  techStacks() {
    return [
      {
        name: 'Typescript',
        url: 'https://www.typescriptlang.org/',
        level: 'STRONG'
      },
      {
        name: 'Javascript',
        url: 'https://www.javascript.com/',
        level: 'STRONG'
      },
      {
        name: 'React',
        url: 'https://reactjs.org/',
        level: 'STRONG'
      },
      {
        name: 'Vue',
        url: 'https://vuejs.org/',
        level: 'STRONG'
      },
      {
        name: 'SQL',
        url: 'https://www.mysql.com',
        lavel: 'MID'
      }
    ]
  }
}
