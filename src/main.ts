import { NestFactory } from '@nestjs/core'
import { GraphQLSchemaHost } from '@nestjs/graphql'
import { AppModule } from './app.module'
import { join } from 'path'
import { writeFileSync } from 'fs'
import { printSchema } from 'graphql'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(3000)

  if (process.env.NODE_ENV === 'production') {
    const { schema } = app.get(GraphQLSchemaHost);
    writeFileSync(join(process.cwd(), `/src/schema.graphql`), printSchema(schema));
  }
}
bootstrap()
