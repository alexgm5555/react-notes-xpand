import { FC, useEffect, useState }from 'react';
import { useNavigate } from 'react-router-dom';

import { AllNotes, NoteInputs } from '../../components';

import './styles.scss';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';

export const NoteList:FC = () => {
  const [showPanelRight, setShowPaneRight] = useState(false);
  const dataRedux = useSelector((state: any) => state.note);
  let navigate = useNavigate();

  const handleClickButton = () =>{
    navigate('/NoteForm');
  }
  useEffect(() => {
    if (dataRedux.operation === 'edit') setShowPaneRight(true);
    else setShowPaneRight(false);
    if (dataRedux.operation === 'detail') navigate('/NoteData');
  }, [dataRedux, navigate, showPanelRight]);

  return (
    <div className='NoteList-container'>
      <div className='header-container'>
        <Button 
          id="nuevo"
          variant='contained'
          onClick={()=>handleClickButton()}
        >+ Nota</Button>
      </div>
      <div className='body-container'>
        <div className='panel-left'><AllNotes /></div>
        {showPanelRight && (
          <div className='panel-right'><NoteInputs /></div>
        )}
      </div>
    </div>
  );
};
