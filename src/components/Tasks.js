import React, { Component } from 'react';


class Tasks extends Component {  

    handlerBorrarTarea(index) {
        console.log("Borrando...", index);             
        this.props.onBorrarTarea(index);        
    }

    render() {
        const contenedor = function(tareas){
            return ([
                <div className="row">
                        {tareas}
                </div>
            ])
        }

        const tareas = this.props.tareas.map((tarea, i) => {
            return ([
                <div className="col-md-4">
                    <div className="card mt-4">
                        <div className="card-header">
                            <h3>{tarea.titulo}</h3>
                            <span className="badge badge-pill badge-danger ml-2">
                                {tarea.prioridad}
                            </span>
                        </div>
                        <div className="card-body">
                            <p>{tarea.descripcion}</p>
                            <p><mark>{tarea.responsable}</mark></p>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-danger" onClick={this.handlerBorrarTarea.bind(this, i)}>Borrar</button>
                        </div>
                    </div>
                </div>
            ]);
        });

        return contenedor(tareas);
    }
}
export default Tasks;