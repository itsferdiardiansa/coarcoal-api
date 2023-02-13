import { ObjectType, Field } from '@nestjs/graphql'

@ObjectType()
export class Introduction {
  @Field()
  title: string
  
  @Field()
  description: string
}