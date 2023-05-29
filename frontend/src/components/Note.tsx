import React from 'react';
import { extendedNotesValues} from '../types/noteTypes';
import axios from 'axios';


interface NoteProps {
  note: extendedNotesValues;
}

const Note: React.FC<NoteProps> = ({ note }) => {


  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:3000/notes/${note.id}`);
      if (response.status === 200) {
        console.log('Note deleted successfully');
      } else {
        console.error('Failed to delete the note');
      } 
    } catch (error) {
      console.error('An error occurred while deleting the note', error);
    }
  };
  
    return (
      <div className="note-container">
  <p className="note-item">Name: {note.name}</p>
  <p className="note-item">Email: {note.email}</p>
  <p className="note-item">Notes: {note.note}</p>
  <p className="note-item">Date: {note.date}</p>
  <button className="delete-button" onClick={handleDelete}>Delete</button>
</div>
    )
    


};

export default Note;