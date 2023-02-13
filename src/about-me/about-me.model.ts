import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class AboutMe {
  @Field()
  description: string
}