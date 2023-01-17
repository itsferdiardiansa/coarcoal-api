import { Query } from '@nestjs/graphql'

export class ExperienceResolver {
  @Query()
  experience() {
    return [
      {
        company: 'GoTo',
        years: 'Jan 2021 - Dec 2022',
        location: 'Remote (ID)',
        icon: '//res.cloudinary.com/dkp2v9lyz/image/upload/v1673990552/me/experiences/gojek-svgrepo-com_eu04qs.svg',
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
        icons: '//res.cloudinary.com/dkp2v9lyz/image/upload/v1673990552/me/experiences/blanja_vasxqd.svg',
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
        icons: '//res.cloudinary.com/dkp2v9lyz/image/upload/v1673990552/me/experiences/upwork-svgrepo-com_khzrcs.svg',
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
        icons: '//res.cloudinary.com/dkp2v9lyz/image/upload/v1673990552/me/experiences/1540288614691_etwejl.svg',
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
