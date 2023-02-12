import { Query } from '@nestjs/graphql'
import { Inject, Injectable } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

export class AboutMeResolver {
  constructor(private config: ConfigModule) {}

  @Query()
  aboutMe() {
    console.log(this.config)

    return {
      description: 'Software engineer with +5 years experience in software development and problem solving. Excellent person in all aspects of the software development cycle and end to end projects. Experienced in technology and writing code to create reliable and user-friendly systems that meet standard business requirements.'
    }
  }
}
