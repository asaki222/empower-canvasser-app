import axios from 'axios';
import { CREATE_NOTE, DELETE_NOTE, FETCH_NOTES} from './noteActionTypes';
import { Dispatch } from 'redux';
import {NoteValues } from '../../types/noteTypes';


export const createNote = (note: NoteValues) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post('http://localhost:3000/notes/new', note);
      dispatch({
        type: CREATE_NOTE,
        payload: response.data,
      });
    } catch (error) {
      console.error('An error occurred while creating the note', error);
    }
  };
};

export const deleteNote = (noteId: NoteValues) => {
  return async (dispatch: Dispatch) => {
    try {
      await axios.delete(`http://localhost:3000/notes/${noteId}`);
      dispatch({
        type: DELETE_NOTE,
        payload: noteId,
      });
    } catch (error) {
      console.error('An error occurred while deleting the note', error);
    }
  };
};

export const fetchNotes = () => {
  return async (dispatch: Dispatch<{ type: typeof FETCH_NOTES; payload: NoteValues[] }>) => {
    try {
      axios.get('http://localhost:3000/notes')
        .then(response => {
          console.log(response.data)
          dispatch({
            type: FETCH_NOTES,
            payload: response.data,
          });
        })
        .catch(error => {
          console.error('An error occurred while fetching the notes', error);
        });
    } catch (error) {
      console.error('An error occurred while fetching the notes', error);
    }
  };
};