import { FC }from 'react';

import './styles.scss';
import { useSelector } from 'react-redux';

export const NoteLabels:FC = () => {
  const data = useSelector((state: any) => state.note);

  return (
    <div className='NoteLabels-container'>
      <ul>
        <li>
          <p><strong>Titulo:</strong> {data.title}</p>
        </li>
        <li>
          <p><strong>Descripción:</strong> {data.description}</p>
        </li>
        <li>
          <p><strong>Creado:</strong> {data.date_created}</p>
        </li>
        <li>
        <p><strong>Estado:</strong> {data.state}</p>
        </li>
        <li>
          <p><strong>Nota Final:</strong> {data.final_note}</p>
        </li>
      </ul>
    </div>
  );
};