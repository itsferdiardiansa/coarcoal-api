import { Query } from '@nestjs/graphql'

export class ExperienceResolver {
  @Query()
  experience() {
    return [
      {
        company: 'GoTo',
        years: 'Jan 2021 - Dec 2022'
      },
      {
        company: 'Metraplasa (Blanja.com)',
        years: 'Nov 2018 - Sep 2020'
      },
      {
        company: 'Upwork',
        years: 'Mar 2018 - Sep 2018'
      },
      {
        company: 'Nusantara Technology (Keepo.me)',
        years: 'Oct 2016 - Dec 2017'
      }
    ]
  }
}
