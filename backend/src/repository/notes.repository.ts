import { Repository, FindOneOptions } from 'typeorm';
import { Note } from '../entities/note.entity';


export class NotesRepository extends Repository<Note> {
  
  async createNote(noteData: Partial<Note>): Promise<Note> {
    const note = this.create(noteData);
    return this.save(note);
  }

  async deleteNoteById(id: number): Promise<void> {
    await this.delete(id);
  }

  async updateNoteById(id: number, noteData: Partial<Note>): Promise<Note> {
    await this.update(id, noteData);
    const options: FindOneOptions<Note> = { where: { id } };
    return this.findOne(options);
  }

  async findAllNotes(): Promise<Note[]> {
    return this.find();
  }
}
