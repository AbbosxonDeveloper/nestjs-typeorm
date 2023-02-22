import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import {ConfigService} from '@nestjs/config'

import { Filter } from './filter/custom.exception.filter';
import { swaggerConfig } from './config/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService)
  const port = config.getOrThrow<number>('app.port')
  const host = config.getOrThrow<string>('app.host')
  

  app.useGlobalPipes(new ValidationPipe())
  app.useGlobalFilters(new Filter())
  
    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('api', app, document);

  await app.listen(port, host);
}
bootstrap();