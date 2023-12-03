import { FC, SetStateAction, useEffect, useState }from 'react';

import './styles.scss';
import { useSelector } from 'react-redux';
import { Button, TextField, } from '@mui/material';
import { NotesInterface, initialState } from '../../redux/noteSlice';
import { updateNotebyId, createNote } from '../../services/notes.service';
import { useNavigate } from 'react-router-dom';

export const NoteInputs:FC = () => {
  const [errors, setErrors] = useState<boolean>(false);
  let navigate = useNavigate();
  
  const [form, setForm] = useState<NotesInterface> ({
    title: '',
    description: '',
    final_note: 0
  });
  const data = useSelector((state: any) => state.note);

  const handleClickButton = async () => {
    try {
      setErrors(true);
      if (form.description === '' || form.title === '') throw "Campos invalidos";
      if (data.operation === 'edit') sendUpdate();
      if (data.operation === 'create') sendCreate();
    } catch (error: any) {
      console.log(error);
      if(error?.message?.errors[0].message) alert(error?.message?.errors[0].message)
    }
  };

  const sendUpdate = async () => {
    const response = await updateNotebyId(data.id, form );
    if ( response?.data?.notes === "Record was updated") navigate(0);
    else throw response;
  }

  const sendCreate = async () => {
    console.log(form);
    
    const response = await createNote(form);
    console.log(response);
    
    if ( response?.data?.note) navigate('/');
    else throw response;
  }
 
  const handleOnChangeTextField = (
    e: { target: { value: SetStateAction<string> }},
    field: ('title'|'description'|'final_note')
  )=>{
    let fieldValue: any = e.target.value.toString();

    if (field === 'title') setForm({ ...form, title: fieldValue});
    if (field === 'description') setForm({ ...form, description: fieldValue});
    if (field === 'final_note') setForm({ ...form, final_note: fieldValue});
  }

  useEffect(() => {
    if (data.operation !== 'create') setForm({...data})
    else setForm({ ...initialState })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className='NoteInputs-container'>
      <ul>
        <li>
            <>
              <TextField
              error={form.title === "" && errors}
              id='input01'
              label='Titulo'
              autoFocus
              value={form.title}
              autoComplete={data.operation === 'create' ? '' : data.title}
              onChange={(e)=>handleOnChangeTextField(e, 'title')}
              />
              <br />
            </>
        </li>
        <li>
            <>
              <TextField
              error={form.description === "" && errors}
              id='input01'
              label='Descripción'
              multiline
              rows={4}
              value={form.description}
              autoComplete={data.operation === 'create' ? '' : data.description}
              onChange={(e)=>handleOnChangeTextField(e, 'description')}
              />
              <br />
            </>
        </li>
        <li>
            <>
              <TextField
              inputProps={{type: 'number'}}
              id='input01'
              label='Nota Final'
              value={form.final_note}
              onChange={(e)=>handleOnChangeTextField(e, 'final_note')}
              />
              <br />
              <Button 
                id="detalles"
                variant='contained'
                onClick={()=>handleClickButton()}
              >Enviar</Button>
            </>
        </li>
      </ul>
    </div>
  );
};
