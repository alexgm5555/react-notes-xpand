import { FC }from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';

import { NoteLabels } from '../../components';

import './styles.scss';

export const NoteData:FC = () => {

  return (
    <div className='NoteData-container'>
      <div className='header-container'>
        <Box sx={{ width: 100 }}>
          <BottomNavigation
            showLabels
          >
            <BottomNavigationAction 
              sx={{
                backgroundColor: "#1976d2",
                color: "white"
              }}
              label={`Atras Page`}
              href={`/`}/>
          </BottomNavigation>
        </Box>
      </div>
      <NoteLabels />
    </div>
  );
};
