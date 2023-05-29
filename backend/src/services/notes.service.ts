import { Injectable } from '@nestjs/common';
import { Note } from '../entities/note.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private readonly noteRepository: Repository<Note>,
  ) {}

  async create(createNoteDto: Note): Promise<Note> {
    const note = this.noteRepository.create(createNoteDto);
    return this.noteRepository.save(note);
  }

  async delete(id: number): Promise<void> {
    await this.noteRepository.delete(id);
  }

  async update(id: number, noteData: Partial<Note>): Promise<Note> {
    await this.noteRepository.update(id, noteData);
    return this.noteRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<Note[]> {
    return this.noteRepository.find();
  }
}
