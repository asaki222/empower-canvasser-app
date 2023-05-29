import React, { useState } from 'react';
import { NoteValues} from '../types/noteTypes';


interface NoteFormProps {
    formValues: NoteValues;
  }

const DefaultNoteForm: React.FC<NoteFormProps> = ({formValues }) => {

  const [interestFormValues, setInterestFormValues] = useState<NoteValues>(formValues)

  const handleFieldChange = (fieldName: keyof NoteValues) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInterestFormValues({ ...interestFormValues, [fieldName]: e.target.value });
  };

  console.log(interestFormValues)

  return (
     <>
      <label>
        Name
        <input
          type="text"
          value={interestFormValues.name}
          onChange={handleFieldChange('name')}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          value={interestFormValues.email}
          onChange={handleFieldChange('email')}
        />
      </label>
      <label>
        Notes
        <textarea
          value={interestFormValues.note}
          onChange={handleFieldChange('note')}
        ></textarea>
      </label>
      </>

  );
};

export default DefaultNoteForm;