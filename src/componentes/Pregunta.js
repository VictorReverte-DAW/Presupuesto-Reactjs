import { Fragment, useState } from "react"
import PropTypes  from 'prop-types'
import Error from './Error'

const Pregunta = ({guardarPresupuesto,guardarRestante,actualizarPregunta}) =>{
    const [cantidad,guardarCantidad] = useState(0);
    const [error,guardarError] = useState(false);

    const definirPresupuesto = (event) =>{
        guardarCantidad(parseInt(event.target.value,10))
    }

    //Submit presupuesto

    const agregarPresupuesto = (event) =>{
        event.preventDefault();

        //Validar

        if(cantidad<1 || isNaN(cantidad)){
            guardarError(true);
            return;
        }

        guardarError(false)
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad)
        actualizarPregunta(false);
    }



    return (
        <Fragment>
            <h2>{error ? <Error mensaje="Valor no valido"/> : null}</h2>
            <form onSubmit={agregarPresupuesto}>
                <input type="number" className="u-full-width" placeholder="Indica tu presupuesto" onChange = {definirPresupuesto}/>
                <input type="submit" className="button-primary u-full-width" value="Guardar presupuesto"/>
            </form>
        </Fragment>
    )
}

Pregunta.propTypes={
    guardarPresupuesto:PropTypes.func.isRequired,
    guardarRestante:PropTypes.func.isRequired,
    actualizarPregunta:PropTypes.func.isRequired,
}


export default Pregunta