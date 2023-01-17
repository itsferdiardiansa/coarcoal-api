import { join } from 'path'
import { Module } from '@nestjs/common'
import { AppService } from './app.service'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { AboutMeModule } from './about-me/about-me.module'
import { ExperienceModule } from './experience/experience.module'
import { TechStackModule } from './tech-stack/tech-stack.module';
import { LinksModule } from './links/links.module';
import { IntroductionModule } from './introduction/introduction.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.schema.ts'),
        outputAs: 'class'
      }
    }),
    AboutMeModule,
    ExperienceModule,
    TechStackModule,
    LinksModule,
    IntroductionModule
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
