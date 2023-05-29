import React, { useState } from 'react';
import { NoteValues} from '../types/noteTypes';
import DefaultNoteForm from "./DefaultNoteForm";
import { createNote } from '../redux/actions/notesActionCreators';
import {ThunkDispatch} from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';


const InterestForm: React.FC = () => {
  const [interestFormValues, setInterestFormValues] = useState<NoteValues>({
    name: '',
    email: '',
    note: '',
    date: ''
  });

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const currentDate = new Date().toISOString();

      const updatedFormValues = {
        ...interestFormValues,
        date: currentDate
      };

      dispatch(createNote(updatedFormValues));

      setInterestFormValues({
        name: '',
        email: '',
        note: '',
        date: ''
      });
    } catch (error) {
      console.error('An error occurred while submitting the form', error);
    }
  };



  return (
    <form onSubmit={handleSubmit}>
       <DefaultNoteForm formValues={interestFormValues} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InterestForm;