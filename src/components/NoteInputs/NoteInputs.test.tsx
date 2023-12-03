import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { NoteInputs } from '.';
import { NotesInterface } from '../../redux/noteSlice';

const mocked = jest.fn();
const unmockedFetch = global.fetch;

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mocked,
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux') as any,
  useSelector: () => mocked,
}));

describe('NoteInputs testing', () => {

const fillForm = (title: string, descrip: string) => {
  const input = document.querySelectorAll('input');
  const area = document.querySelectorAll('textarea');
  
  fireEvent.change(input[0], { target: { value: title } });
  fireEvent.change(input[1], { target: { value: descrip} });
  fireEvent.input(area[0],  { target: { value: 'texto' }} );
};

afterEach(() => {
  cleanup();
  global.fetch = unmockedFetch;
});

  beforeEach(() => {
    render(
      <NoteInputs />,
    );
  });

  test('render', () => {
    const input01 = screen.getByTestId('input01');
    const input02 = screen.getByTestId('input02');
    const input03 = screen.getByTestId('input03');
    expect(input01).toBeInTheDocument();
    expect(input02).toBeInTheDocument();
    expect(input03).toBeInTheDocument();
  });

  test('click button', async () => {
    fillForm('test 1', 'texto');
    const buttons = document.querySelectorAll('button');
    await fireEvent.click(buttons[0]);
    expect(screen).toBeTruthy();
  });
});
 