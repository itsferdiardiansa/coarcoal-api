import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Experience {
  @Field({ nullable: true })
  company: string
  
  @Field()
  years: string
  
  @Field()
  location: string
  
  @Field()
  icon: string
  
  @Field(type => [String], {nullable: true})
  techStacks: string[]
}