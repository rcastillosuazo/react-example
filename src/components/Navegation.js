import React, { Component } from 'react';

class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        function Barra(props) {                  
            return <nav className="navbar navbar-dark bg-dark">
                <a href="" className="text-white">
                    {props.titulo}
                </a>
                <span className="badge badge-pill badge-light ml-2">
                    {props.tareas}
                </span>
            </nav>;
        }

        return (
            <Barra titulo={this.props.titulo} tareas={this.props.tareas}></Barra>
        )
    }
}
export default Navigation;