import React, { Component } from 'react';


class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: '',
            responsable: '',
            descripcion: '',
            prioridad: 'baja'
        }
        this.handleInput= this.handleInput.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    handleInput(e) {
        console.log("Escribiendo...");
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
        console.log(this.state);
    }

    handleSubmit(e) {
        console.log("Enviando...");
        e.preventDefault();
        this.props.onAgregarTarea(this.state);
        console.log("form :",this.state);
    }

    render() {
        return (
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" name="titulo" onChange={this.handleInput} className="form-control" placeholder="Titulo" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="responsable"  onChange={this.handleInput} className="form-control" placeholder="Responsable" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="descripcion"  onChange={this.handleInput} className="form-control" placeholder="Descripción" />
                    </div>
                    <div className="form-group"> 
                        <select name="prioridad"  onChange={this.handleInput} className="form-control" placeholder="Prioridad">
                            <option>baja</option>
                            <option>media</option>
                            <option>alta</option>
                        </select>
                    </div>                   
                    <input  type="submit" class="btn btn-primary" value="Guardar"/>
                </form>
            </div>
        )
    }
}
export default TaskForm;