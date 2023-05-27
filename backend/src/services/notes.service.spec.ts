import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { NotesService } from './notes.service';
import { Note } from '../entities/note.entity';

describe('NotesService', () => {
  let notesService: NotesService;
  let noteRepository: Repository<Note>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NotesService,
        {
          provide: getRepositoryToken(Note),
          useClass: Repository,
        },
      ],
    }).compile();

    notesService = module.get<NotesService>(NotesService);
    noteRepository = module.get<Repository<Note>>(getRepositoryToken(Note));
  });

  describe('create', () => {
    it('should create and save a new note', async () => {
      // Arrange
      const createNoteDto: Note = {
        id: 1,
        name: 'Note 1',
        email: 'tom@tome',
        note: 'This is a note',
        date: new Date(),
      };

      const saveSpy = jest.spyOn(noteRepository, 'save').mockResolvedValueOnce(createNoteDto);

      // Act
      const result = await notesService.create(createNoteDto);

      // Assert
      expect(result).toEqual(createNoteDto);
      expect(saveSpy).toHaveBeenCalledWith(createNoteDto);
    });
  });

  describe('delete', () => {
    it('should delete a note by id', async () => {
      // Arrange
      const id = 1;
      const deleteSpy = jest.spyOn(noteRepository, 'delete').mockResolvedValueOnce(undefined);

      // Act
      await notesService.delete(id);

      // Assert
      expect(deleteSpy).toHaveBeenCalledWith(id);
    });
  });

  describe('update', () => {
    it('should update a note by id', async () => {
      // Arrange
      const id = 1;
      const noteData: Partial<Note> = {
        name: 'Updated Note',
        note: 'This is an updated note',
      };

      const updateSpy = jest.spyOn(noteRepository, 'update').mockResolvedValueOnce(undefined);
      const findOneSpy = jest.spyOn(noteRepository, 'findOne').mockResolvedValueOnce({
        id,
        name: 'Updated Note',
        email: 'tom@tome',
        note: 'This is an updated note',
        date: new Date(),
      });

      // Act
      const result = await notesService.update(id, noteData);

      // Assert
      expect(result).toEqual({
        id,
        name: 'Updated Note',
        email: 'tom@tome',
        note: 'This is an updated note',
        date: expect.any(Date),
      });

      const find =   {"where": {"id": id}}
      expect(updateSpy).toHaveBeenCalledWith(id, noteData);
      expect(findOneSpy).toHaveBeenCalledWith(find);
    });
  });

  describe('findAll', () => {
    it('should return all notes', async () => {
      // Arrange
      const notes: Note[] = [
        { id: 1, name: 'Note 1', note: 'This is note 1', date: new Date(),email: 'tom@tome', },
        { id: 2, name: 'Note 2', note: 'This is note 2', date: new Date(), email: 'tom@tome', },
      ];

      const findSpy = jest.spyOn(noteRepository, 'find').mockResolvedValueOnce(notes);

      // Act
      const result = await notesService.findAll();

      // Assert
      expect(result).toEqual(notes);
      expect(findSpy).toHaveBeenCalled();
    });
  });
});