import { join } from 'path'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { AboutMeModule } from './graphql/about-me/about-me.module'
import { ExperienceModule } from './graphql/experience/experience.module'
import { TechStackModule } from './graphql/tech-stack/tech-stack.module';
import { LinksModule } from './graphql/links/links.module';
import { IntroductionModule } from './graphql/introduction/introduction.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: process.env.NODE_ENV === 'development',
      autoSchemaFile: process.env.NODE_ENV === 'development' ? join(process.cwd(), 'src/schema.gql') : true,
      path: '/gql'
    }),
    AboutMeModule,
    ExperienceModule,
    TechStackModule,
    LinksModule,
    IntroductionModule
  ],
  controllers: []
})
export class AppModule {}
