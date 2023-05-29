import { Module } from '@nestjs/common';
import { NotesController } from '../controller/notes.controller';
import { NotesService } from '../services/notes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from '../entities/note.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Note])],
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesModule {}