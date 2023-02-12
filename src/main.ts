import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import path from 'path'
import fs from 'fs'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  //joining path of directory 
  const directoryPath = path.join(__dirname, '.')
  //passsing directoryPath and callback function
  fs.readdir(directoryPath, function (err, files) {
      //handling error
      if (err) {
          return console.log('Unable to scan directory: ' + err)
      } 
      //listing all files using forEach
      files.forEach(function (file) {
          // Do whatever you want to do with the file
          console.log(file) 
      })
  })

  await app.listen(3000)
}
bootstrap()
