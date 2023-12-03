import React, { FC } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css';
import { NoteData, NoteForm, NoteList } from './pages';


const router = createBrowserRouter([
  {
    path: "/",
    element: <NoteList />,
  },
  {
    path: '/NoteList',
    element: <NoteList />
  },
  {
    path: '/NoteData',
    element: <NoteData />
  },
  {
    path: '/NoteForm',
    element: <NoteForm />
  }
]);

const App:FC =()=>{
  return (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  );
}

export default App;
