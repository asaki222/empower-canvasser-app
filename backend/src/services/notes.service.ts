import { Injectable } from '@nestjs/common';
import { Note } from '../entities/note.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotesRepository } from '../repository/notes.repository';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(NotesRepository)
    private readonly noteRepository: NotesRepository,
  ) {}

  async create(createNoteDto: Note): Promise<Note> {
    const note = this.noteRepository.create(createNoteDto);
    return this.noteRepository.save(note);
  }

  async delete(id: number): Promise<void> {
    await this.noteRepository.deleteNoteById(id);
  }

  async update(id: number, noteData: Partial<Note>): Promise<Note> {
    await this.noteRepository.updateNoteById(id, noteData);
    return this.noteRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<Note[]> {
    return this.noteRepository.findAllNotes();
  }
}
