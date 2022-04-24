import './App.css';

//Components
import Header from './components/Header';
import TasksList from './features/tasks/Tasks';

function App() {
  return (
    <div className="App">
      <Header />
      <TasksList />
    </div>
  );
}

export default App;
