import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Links {
  @Field()
  name: string

  @Field()
  url: string

  @Field()
  icon: string
}