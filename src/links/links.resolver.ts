import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class LinksResolver {
  @Query()
  links() {
    return [
      {
        name: 'Linkedin',
        url: '//www.linkedin.com/in/ferdi-a-7737aa109/',
        icon: '//res.cloudinary.com/dkp2v9lyz/image/upload/v1673988902/me/links/linkedin-svgrepo-com_lrhewk.svg'
      },
      {
        name: 'Github',
        url: '//github.com/itsferdiardiansa',
        icon: '//res.cloudinary.com/dkp2v9lyz/image/upload/v1673988902/me/links/github-svgrepo-com_hoiabx.svg'
      }
    ]
  }
}
