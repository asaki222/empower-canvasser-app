import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from 'src/entities/note.entity';
require('dotenv').config()

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME} = process.env;

console.log('process', process.env)

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: DB_HOST,
      port: 3306, 
      username: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      entities: [Note],
      synchronize: true, 
      logging:true
    }),
  ],
})
export class DatabaseModule {}