import React from "react";
import './Filter.css';

const Filter = () => {
    return (
    <div className="selectors">
        <h3>Projetos</h3>
        <select name="projetos" id="projetos">
            <option value="Todos">Todos</option>
            <option value="Redirecionador">Redirecionador</option>
        </select>
        <h3>Clientes</h3>
        <select name="clientes" id="clientes">
            <option value="Todos">Todos</option>
            <option value="CBDN">CBDN</option>
            <option value="RBB">RBB</option>
            <option value="RTB">RTB</option>
        </select>
    </div>
    )
}

export default Filter;