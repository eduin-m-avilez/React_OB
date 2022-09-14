import './App.css';
// import EjemploOne from './hooks/EjemploOne';
import EjemploTwo from './hooks/EjemploTwo';
// import ContactListComponent from './components/container/Contact_list';
// import TaskListComponent from './components/container/Task_list';
// import Saludo from './components/pure/Saludo';

function App() {

  // let name = " Juan";
  return (
    <div className="App">
      {/* <Saludo name={name}></Saludo> */}
      {/* Componente de Listado de tareas */}
      {/* <TaskListComponent></TaskListComponent> */}
      <div>
      {/* <ContactListComponent></ContactListComponent> */}
      {/* <EjemploOne></EjemploOne> */}
      <EjemploTwo></EjemploTwo>
      </div>
    </div>
  );
}

export default App;
