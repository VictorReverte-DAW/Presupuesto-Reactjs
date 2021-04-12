import React, { Fragment, useState, useEffect } from 'react'
import Pregunta from './componentes/Pregunta'
import Formulario from './componentes/Formulario'
import Listado from './componentes/Listado'
import ControlPresupuesto from './componentes/ControlPresupuesto'

function App() {

  //Definir el state

  const [presupuesto, guardarPresupuesto] = useState(0)
  const [restante, guardarRestante] = useState(0)
  const [mostrarPregunta, actualizarPregunta] = useState(true)
  const [gastos, guardarGastos] = useState([])
  const [gasto, guardarGasto] = useState({})
  const [creargasto, guardarCrearGasto] = useState(false)

  //UseEffect que actualiza el restante

  useEffect(() => {
    if (creargasto) {
      //Agrega nuevo presupuesto
      guardarGastos([
        ...gastos, gasto
      ])
      //Resta del presupuesto actual

      const presupuestoRestante = restante-gasto.cantidad;
      guardarRestante(presupuestoRestante)

      //resetear a false
      guardarCrearGasto(false)
    }
    
  }, [gasto,creargasto,gastos,restante])

  //Cuando agreguemos un nuevo gasto



  return (
    <Fragment>

      <div className="container">
        <section>
          <h1>Presupuesto</h1>
          <div className="contenido-principal contenido">
            {mostrarPregunta
              ?
              (<Pregunta guardarPresupuesto={guardarPresupuesto} guardarRestante={guardarRestante} actualizarPregunta={actualizarPregunta} />)
              :
              (<div className="row">
                <div className="one-half column">
                  <Formulario guardarGasto={guardarGasto} guardarCrearGasto={guardarCrearGasto}/>
                </div>
                <div className="one-half column">
                 
                  <ControlPresupuesto presupuesto={presupuesto} restante={restante} />
                  <Listado gastos={gastos} />
                </div>
              </div>

              )}


          </div>
        </section>
      </div>
    </Fragment>
  );
}

export default App;
