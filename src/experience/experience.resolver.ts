import { Query } from '@nestjs/graphql'

export class ExperienceResolver {
  @Query()
  experience() {
    return [
      {
        company: 'GoTo',
        years: 'Jan 2021 - Dec 2022',
        location: 'Remote (ID)',
        techStacks: [
          'Vue',
          'Vuex',
          'Javascript',
          'Jest'
        ]
      },
      {
        company: 'Metraplasa (Blanja.com)',
        years: 'Nov 2018 - Sep 2020',
        location: 'South Jakarta (ID)',
        techStacks: [
          'Vue',
          'Vuex',
          'Javascript'
        ]
      },
      {
        company: 'Upwork',
        years: 'Mar 2018 - Sep 2018',
        location: 'Remote (Worldwide)',
        techStacks: [
          'React',
          'Javascript',
          'Laravel'
        ]
      },
      {
        company: 'Nusantara Technology (Keepo.me)',
        years: 'Oct 2016 - Dec 2017',
        location: 'Surabaya (ID)',
        techStacks: [
          'Angular',
          'React',
          'Javascript',
          'Typescript',
          'Laravel',
          'SQL'
        ]
      }
    ]
  }
}
