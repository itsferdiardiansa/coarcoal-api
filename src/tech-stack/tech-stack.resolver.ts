import { Query, Resolver } from '@nestjs/graphql'
import { TechStack } from './tech-stack.model'

@Resolver(of => TechStack)
export class TechStackResolver {
  @Query(returns => [TechStack])
  techStacks() {
    return [
      {
        name: 'Typescript',
        url: '//www.typescriptlang.org/',
        icon: '//res.cloudinary.com/dkp2v9lyz/image/upload/v1673988873/me/tech/typescript-svgrepo-com_renmse.svg',
        level: 'STRONG',
      },
      {
        name: 'Javascript',
        url: '//www.javascript.com/',
        icon: '//res.cloudinary.com/dkp2v9lyz/image/upload/v1673988872/me/tech/javascript-svgrepo-com_zwsrdw.svg',
        level: 'STRONG'
      },
      {
        name: 'React',
        url: '//reactjs.org/',
        icon: '//res.cloudinary.com/dkp2v9lyz/image/upload/v1673988872/me/tech/react-svgrepo-com_dc7ays.svg',
        level: 'STRONG'
      },
      {
        name: 'Vue',
        url: '//vuejs.org/',
        icon: '//res.cloudinary.com/dkp2v9lyz/image/upload/v1673988874/me/tech/vue-svgrepo-com_oouwhb.svg',
        level: 'STRONG'
      },
      {
        name: 'Node',
        url: '//nodejs.org/',
        icon: '//res.cloudinary.com/dkp2v9lyz/image/upload/v1673988872/me/tech/node-fill-svgrepo-com_rha4sc.svg',
        level: 'MID'
      },
      {
        name: 'SQL',
        url: '//www.mysql.com',
        icon: '//res.cloudinary.com/dkp2v9lyz/image/upload/v1673988872/me/tech/sql-svgrepo-com_kl1ifd.svg',
        level: 'MID'
      }
    ]
  }
}
