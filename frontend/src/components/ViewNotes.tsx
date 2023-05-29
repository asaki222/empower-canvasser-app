import React, { useEffect} from 'react';
import { extendedNotesValues } from '../types/noteTypes';
import Note from './Note';
import {useSelector} from 'react-redux';
import { fetchNotes } from '../redux/actions/notesActionCreators';
import { RootState } from '../redux/store';
import {ThunkDispatch} from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';




interface ViewNotesProps {
  formValues?: extendedNotesValues;
}

const ViewNotes: React.FC<ViewNotesProps> = () => {
  const notes = useSelector((state: RootState) => state.notes);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();


  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);


  return (
    <div>
    <h2>Notes</h2>
    {notes.length > 0 ? (
      notes.map((note: extendedNotesValues) => <Note note={note} key={note.id} />)
    ) : (
      <p>Looks like there are no notes!</p>
    )}
  </div>
  );
};

export default ViewNotes;