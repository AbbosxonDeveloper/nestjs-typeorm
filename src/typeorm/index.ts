import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as dotenv from 'dotenv'
dotenv.config()
const ENV = process.env

export const DatabaseConnect: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    password: ENV.DB_PASSWORD,
    username: ENV.DB_USERNAME,
    database: ENV.DATABASE,
    entities: [__dirname, '/../entities/*.entity.{js,ts}'],
    migrations: [__dirname+ '/../migrations/'+ '**/*.{js,ts}'],
    autoLoadEntities: true,
    synchronize: true,
}