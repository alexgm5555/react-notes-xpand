import { createSlice } from '@reduxjs/toolkit';

export interface NotesInterface {
  id?: string,
  title: string,
  description: string,
  state?: ('pendiente'|'completada'),
  final_note?: number,
  date_created?: string,
  operation?: ('create'|'list'|'edit'|'delete'|'detail')
}

export const initialState: NotesInterface = {
  id: '',
  title: '',
  description: '',
  state: 'pendiente',
  final_note: 0,
  date_created: undefined,
  operation: 'list'
}

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    notesRegister: (state, action) => {
      const { ...notes } = action.payload;
      state.id = notes.id;
      state.title = notes.title;
      state.description = notes.description;
      state.state = notes.state;
      state.final_note = notes.final_note;
      state.date_created = notes.date_created;
      state.operation = notes.operation;
    },
    editOpe: (state, action) => {
      const { operation } = action.payload;
      state.operation = operation;
    },
  }
});

export const {
  notesRegister,
  editOpe
} = noteSlice.actions;
export default noteSlice.reducer;
