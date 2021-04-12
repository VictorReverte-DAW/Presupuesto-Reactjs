import { React, useState } from "react"
import Error from './Error'
import shortid from'shortid'

import PropTypes  from 'prop-types'

const Formulario = ({guardarGasto,guardarCrearGasto}) =>{

    const [nombre,guardarNombre] = useState('');
    const [cantidad,guarduarCantidad] = useState(0);
    const [error,guardarError] = useState(false);
    //Agregar gasto
    const agregarGasto = (e) =>{
        e.preventDefault()
        
        if(cantidad <1 || isNaN(cantidad) || nombre.trim() ===''){
            guardarError(true);
            return;
        }

        guardarError(false);
        //Construir gasto
        const gastos = {
            nombre,
            cantidad,
            id:shortid.generate()
        }
     
        //pasar el gasto al componente principal
        guardarGasto(gastos)
        guardarCrearGasto(true)
        //resetear el formulario
       
        guardarNombre('')
        guarduarCantidad(0)
    }
    return(
        <form onSubmit={agregarGasto}>
            <h2>Agrega tus gastos aqui</h2>
             {error ? <Error mensaje="Ambos campos son obligatorios o Presupuesto"/>:null}
            <div className="campo">
                <label>Nombre Gasto</label>
                <input type="text" className="u-full-width" 
                        placeholder="Ej. Transporte" value={nombre} 
                        onChange={event => guardarNombre(event.target.value)}/>

                <label>Cantidad del  Gasto</label>
                <input type="number" className="u-full-width" 
                        placeholder="Ej. 20€" value={cantidad} 
                        onChange={event => guarduarCantidad(parseInt(event.target.value))}/>

                <input type="submit" className="button-primary u-full-width" placeholder="Agregar Gasto"/>
            </div>
        </form>
    )
}

Formulario.propTypes={
    guardarGasto:PropTypes.func.isRequired,
    guardarCrearGasto:PropTypes.func.isRequired,
}

export default Formulario