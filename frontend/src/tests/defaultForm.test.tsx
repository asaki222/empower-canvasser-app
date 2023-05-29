import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DefaultNoteForm from '../components/DefaultNoteForm';

describe('DefaultNoteForm', () => {
  const formValues = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    note: 'Test note',
    date: new Date().toISOString()
  };

  it('should update the form values correctly', () => {
    const { getByLabelText } = render(<DefaultNoteForm formValues={formValues} />);

    const nameInput = getByLabelText('Name') as HTMLInputElement;
    const emailInput = getByLabelText('Email') as HTMLInputElement;
    const noteTextarea = getByLabelText('Notes') as HTMLTextAreaElement;

    expect(nameInput.value).toBe(formValues.name);
    expect(emailInput.value).toBe(formValues.email);
    expect(noteTextarea.value).toBe(formValues.note);

    const updatedName = 'Jane Smith';
    const updatedEmail = 'jane.smith@example.com';
    const updatedNote = 'Updated test note';

    fireEvent.change(nameInput, { target: { value: updatedName } });
    fireEvent.change(emailInput, { target: { value: updatedEmail } });
    fireEvent.change(noteTextarea, { target: { value: updatedNote } });

    expect(nameInput.value).toBe(updatedName);
    expect(emailInput.value).toBe(updatedEmail);
    expect(noteTextarea.value).toBe(updatedNote);
  });
});
