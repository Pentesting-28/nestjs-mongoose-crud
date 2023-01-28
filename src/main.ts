import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('My documentation Crud Api Example.')
  .setDescription('Api to promote learning in NestJs.')
  .setVersion('1.0')
  .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('document-api', app, document);

  await app.listen(3000);
}
bootstrap();
