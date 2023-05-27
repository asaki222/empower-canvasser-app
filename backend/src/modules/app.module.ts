import { Module } from '@nestjs/common';
import { AppController } from '../controller/app.controller';
import { AppService } from '../services/app.service';
import { NotesModule } from './notes.module';
import { NotesController } from '../controller/notes.controller';
import { NotesService } from '../services/notes.service';
import { NotesRepository } from '../repository/notes.repository';
import { DatabaseModule } from '../database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from '../entities/note.entity';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Note]), NotesModule],
  controllers: [AppController, NotesController],
  providers: [ AppService, NotesService, NotesRepository], 
})
export class AppModule {}
