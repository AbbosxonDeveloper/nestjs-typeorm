import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
.setTitle('NestJS with Typeorm')
.setDescription('NestJS application with typeorm postgres')
.setVersion('1.0')
.build()
