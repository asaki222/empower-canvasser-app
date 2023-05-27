import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { NotesService } from '../services/notes.service';
import { Note } from '../entities/note.entity';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  findAll() {
    return this.notesService.findAll();
  }

  @Post('new')
  create(@Body() createNoteDto: Note) {
    return this.notesService.create(createNoteDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateNoteDto: Partial<Note>) {
    return this.notesService.update(id, updateNoteDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.notesService.delete(id);
  }
}