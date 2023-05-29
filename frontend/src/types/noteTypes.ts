export interface NoteValues {
    name: string;
    email: string;
    note: string;
    date: string
  }

export interface extendedNotesValues extends NoteValues {
  id: string
}