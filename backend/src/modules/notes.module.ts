import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotesController } from '../controller/notes.controller';
import { DatabaseModule } from '../database/database.module';
import { NotesService } from '../services/notes.service';
import { Note } from '../entities/note.entity';
import { NotesRepository } from '../repository/notes.repository';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Note])],
  controllers: [NotesController],
  providers: [NotesService, NotesRepository],
})
export class NotesModule {}