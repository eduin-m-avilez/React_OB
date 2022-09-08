import './App.css';
import ContactListComponent from './components/container/Contact_list';
import TaskListComponent from './components/container/Task_list';
// import Saludo from './components/pure/Saludo';

function App() {

  // let name = " Juan";
  return (
    <div className="App">
      {/* <Saludo name={name}></Saludo> */}
      {/* Componente de Listado de tareas */}
      <TaskListComponent></TaskListComponent>
      <div>
        <ContactListComponent></ContactListComponent>
      </div>
    </div>
  );
}

export default App;
