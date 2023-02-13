import { ObjectType, Field, registerEnumType } from '@nestjs/graphql'

enum TechLevel {
  LOW = 'LOW',
  MID = 'MID',
  STRONG = 'STRONG'
}

registerEnumType(TechLevel, {
  name: 'TechLevel',
  description: 'The tech of level!'
})

@ObjectType()
export class TechStack {
  @Field()
  name: string
  
  @Field()
  url: string
  
  @Field({ nullable: true })
  imageUrl: string
  
  @Field(type => TechLevel, { nullable: true })
  level: TechLevel
}