import { FC, useEffect, useState }from 'react';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';

import './styles.scss';
import { NotesInterface, notesRegister } from '../../redux/noteSlice';
import { getAllNotes,deleteNotebyId } from '../../services/notes.service';
import { useNavigate } from 'react-router-dom';

export const AllNotes:FC = () => {
  const [allNotes, setAllNotes] = useState([]);
  const dispatch =  useDispatch();
  let navigate = useNavigate();

  const getNotes = async () => {
    try {
      const dataApi = await getAllNotes();
      if (dataApi.data.notes.length === 0) navigate('/NoteForm');
      setAllNotes(dataApi.data.notes);
    } catch (error) {
      console.error('Error de conexion');
    }
  }

  const deleteNote = async (id: any) => {
    try {
      const response = await deleteNotebyId(id);
      console.log(response);
      if ( response?.data?.notes === "Record was deleted") navigate(0);
      else throw response;
    } catch (error: any) {
      console.log(error);
      if(error?.message?.errors[0].message) alert(error?.message?.errors[0].message)
    }
  } 

  const handleClick = (
    ope: ('edit'|'delete'|'detail'),
    item: NotesInterface
  ) => {
    if (ope === 'delete') deleteNote(item.id);
    dispatch(notesRegister({ operation: ope, ...item }));
  };

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='AllNotes-container'>
      <ul>
      {allNotes && allNotes.map((item: NotesInterface)=>(
        <li key={item.id}>
          <div className='strong-container'>
            <strong>Título:</strong> {item.title}
            <br />
            <strong>F. creación:</strong> {item.date_created}
            <br />
            <strong>Estado:</strong> {item.state}
          </div>
          <div className='buttons-container'>
            <Button 
              id="editar"
              variant='contained'
              onClick={()=>handleClick('edit', item)}
            >Editar</Button>
            <Button 
              id="eliminar"
              variant='contained'
              onClick={()=>handleClick('delete', item)}
            >Borrar</Button>
            <Button 
              id="detalles"
              variant='contained'
              onClick={()=>handleClick('detail', item)}
            >Ver</Button>
          </div>

        </li>
      ))}
      </ul>
    </div>
  );
};
