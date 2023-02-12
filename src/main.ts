import { NestFactory } from '@nestjs/core'
import { GraphQLSchemaHost } from '@nestjs/graphql'
import { AppModule } from './app.module'
import { join } from 'path'
import fs, { writeFileSync } from 'fs'
import { printSchema } from 'graphql'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(3000)

  // if (process.env.NODE_ENV === 'production') {
    const { schema } = app.get(GraphQLSchemaHost);
    writeFileSync(join(process.cwd(), `/dist/schema.graphql`), printSchema(schema));
  // }

   //joining path of directory 
   const directoryPath = join(__dirname, '.')
   //passsing directoryPath and callback function
   fs.readdir(directoryPath, function (err, files) {
       //handling error
       if (err) {
           return console.log('Unable to scan directory: ' + err)
       } 
       //listing all files using forEach
       files.forEach(function (file) {
           // Do whatever you want to do with the file
           console.log('F: ', file) 
       })
   })
}
bootstrap()
