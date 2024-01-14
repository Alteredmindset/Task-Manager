import {useState} from 'react';
import './App.css';
import { Header } from "./components/Header"
import { AddTask } from './components/AddTask';
import { ShowTask } from './components/ShowTask';

function App() {
  const [tasklist, setTasklist]= useState([])
  const [task, setTask] = useState ({})

  return (
    <div className="App">
     <Header/>
     <AddTask 
     taskList={tasklist} 
     setTasklist={setTasklist}
     task={task}
     setTask={setTask}
     />
     <ShowTask 
     taskList={tasklist} 
     setTasklist={setTasklist}
     task={task}
     setTask={setTask}
     />
    </div>
  );
}

export default App;
