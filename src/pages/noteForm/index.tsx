import { FC, useEffect }from 'react';
// import { useNavigate } from 'react-router-dom';

import { NoteInputs } from '../../components';

import './styles.scss';
import { useDispatch } from 'react-redux';
import { editOpe } from '../../redux/noteSlice';

export const NoteForm:FC = () => {
  const dispatch =  useDispatch();

  useEffect(() => {
    dispatch(editOpe({ operation: 'create'}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='NoteForm-container'>
      <div className='component-container'>
        <NoteInputs />
      </div>
    </div>
  );
};
