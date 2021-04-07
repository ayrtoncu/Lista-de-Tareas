import React, { FC } from 'react';
import {useSelector} from 'react-redux'
import './App.css';
import Header from './components/Header'
import Sidebar from './components/SideBar';
import Notification from './components/Notification';
import {RootState} from './store/store'

const App: FC = () => {
  const notificationMsg = useSelector((state: RootState)=> state.notification.msg);

  return (
    <div className="App">
      <Header title='Lista de Tareas App' subtitle='Crear algunas listas y agregar alguna tarea a cada lista' />

      <div className="container px-5">
        <div className="columns">
          <Sidebar/>
        </div>
      </div>
      <Notification msg={notificationMsg}/>
    </div>
  );
}

export default App;
