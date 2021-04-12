import { Fragment, React } from "react"
import {revisarPresupuesto} from './helpers'
import PropTypes  from 'prop-types'

const ControlPresupuesto = ({presupuesto,restante})=>{
   return (
       <Fragment>
           <div className="alert alert-primary">
               Presupuesto: €{presupuesto}
           </div>
           <div className={revisarPresupuesto(presupuesto,restante)}>
                {(restante<0) ? <h2>Has superado el presupuesto tienes un déficit de € {restante}</h2> : <label>Restante:€ {restante}</label> }
           </div>
       </Fragment>
   )
}

ControlPresupuesto.propTypes={
    presupuesto:PropTypes.number.isRequired,
    restante:PropTypes.number.isRequired,
}

export default ControlPresupuesto;