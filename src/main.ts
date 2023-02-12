import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { GraphQLSchemaBuilderModule, GraphQLSchemaFactory } from '@nestjs/graphql'
import { writeFileSync } from 'fs'
import { printSchema } from 'graphql'
import { join } from 'path'
import { AboutMeResolver } from './about-me/about-me.resolver'

// async function generateSchema() {
//   const app = await NestFactory.create(GraphQLSchemaBuilderModule)
//   await app.init()

//   const gqlSchemaFactory = app.get(GraphQLSchemaFactory)
//   const schema = await gqlSchemaFactory.create([
//     AboutMeResolver
//   ])

//   console.log(printSchema(schema))
//   // writeFileSync(join(process.cwd(), `/${serviceName}-schema.gql`), printSchema(schema))
// }

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  await app.listen(3000)
}
bootstrap()
