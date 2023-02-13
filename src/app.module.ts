import { join } from 'path'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { AboutMeModule } from './about-me/about-me.module'
import { ExperienceModule } from './experience/experience.module'
import { TechStackModule } from './tech-stack/tech-stack.module';
import { LinksModule } from './links/links.module';
import { IntroductionModule } from './introduction/introduction.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql')
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
