import { useDispatch } from 'react-redux';
import './App.css';

//Components
import Header from './components/Header';
import TasksList from './features/tasks/TasksList';
import ToDoForm from './features/tasks/ToDoForm';

import { clearCompleted } from './features/tasks/tasksSlice';

function App() {
  const dispatch = useDispatch()

  return (
    <div className="App">
      <Header />
      <ToDoForm />
      <TasksList />
      <div className='clearcompleted'>
        <button onClick={() => dispatch(clearCompleted())}>Eliminar completadas</button>
      </div>
    </div>
  );
}

export default App;
