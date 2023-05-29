import { extendedNotesValues } from '../../types/noteTypes';
import { CREATE_NOTE, DELETE_NOTE, FETCH_NOTES } from '../actions/noteActionTypes';


const notesReducer = (state: extendedNotesValues[] = [], action: any) => {
  switch (action.type) {
    case CREATE_NOTE:
      return [...state, action.payload];
    case DELETE_NOTE:
      return state.filter((note) => note.id !== action.payload);
    case FETCH_NOTES:
      return action.payload;
    default:
      return state;
  }
};

export default notesReducer;
