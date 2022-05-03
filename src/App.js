import { useDispatch, useSelector } from 'react-redux';
import './App.css';

//Components
import Header from './components/Header';
import TasksList from './features/tasks/TasksList';
import ToDoForm from './features/tasks/ToDoForm';

import ClearButton from './features/tasks/ClearButton';

function App() {

  return (
    <div className="App">
      <Header />
      <ToDoForm />
      <TasksList />
      <ClearButton />
    </div>
  );
}

export default App;
