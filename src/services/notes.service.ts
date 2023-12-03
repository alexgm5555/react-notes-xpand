
import connectDB from './connectDB';
// import { validate as isValidUUID } from 'uuid';

const uriNotes =  `
${process.env.REACT_APP_BACK_URI}${process.env.REACT_APP_BACK_URI_NOTES}
`;

export const createNote = ( body: {} ) => {
  const connect: any = new connectDB();
  return connect.post(uriNotes, body);
}

export const getAllNotes = () => {
  const connect: any = new connectDB();
  return connect.get(uriNotes)
}

export const getNotebyId = ( id: string ) => {
  const connect: any = new connectDB();
  // const idCorrect = isValidUUID(id);
  // if (!idCorrect) throw 'Invalid Id';
  
  const url = `${uriNotes}?id=${id}`
  return connect.get(url)
}

export const deleteNotebyId = ( id: string ) => {
  const connect: any = new connectDB();
  // const idCorrect = isValidUUID(id);
  // if (!idCorrect) throw 'Invalid Id';
  const url = `${uriNotes}?id=${id}`
  return connect.delete(url)
}

export const updateNotebyId = ( id: string, body: {} ) => {
  const connect: any = new connectDB();
  // const idCorrect = isValidUUID(id);
  // if (!idCorrect) throw 'Invalid Id';

  console.log(uriNotes);
  const url = `${uriNotes}?id=${id}`
  return connect.update(url, body)
}
