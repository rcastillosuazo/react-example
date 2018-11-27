import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navegation';
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';

import { tareasJson } from './datos.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tareas: tareasJson,
      title: "Aplicacion de tareas",
      nTareas: tareasJson.length

    };
    this.handleAgregarTarea = this.handleAgregarTarea.bind(this);
    this.handleBorrarTarea = this.handleBorrarTarea.bind(this);
  }

  handleAgregarTarea(tarea) {    
    const newTarea = [...this.state.tareas, tarea];
    this.setState({
      tareas: newTarea,
      nTareas:newTarea.length
    });    
  }

  handleBorrarTarea(index) {    
    if (window.confirm("Seguro que deseas borrar?")) {
      const newTareas= this.state.tareas.filter((e, i) => {
        return i !== index;
      });
      this.setState({
        tareas: newTareas,
        nTareas: newTareas.length
      });      
    }

  }

  render() {
    return (
      <div className="App">
        <Navigation titulo={this.state.title} tareas={this.state.nTareas} />
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-3">
              <img src={logo} className="App-logo" alt="logo" />
              <TaskForm onAgregarTarea={this.handleAgregarTarea}></TaskForm>
            </div>
            <div className="col-md-9">

              <Tasks tareas={this.state.tareas} onBorrarTarea={this.handleBorrarTarea}></Tasks>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
