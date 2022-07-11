import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import ListadoGastos from './components/ListadoGastos'
import { generarId } from './helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {

  const [presupuesto, setPresupuesto] = useState(0) // estado del presupuesto
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false) // estado del presupuesto
  const [modal, setModal] = useState(false) // estado del modal
  const [animarModal, setAnimarModal] = useState(false) // animación del modal
  const [gastos, setGastos] = useState([]) // estado de los gastos

  const handleNuevoGasto = () => { // función que muestra el modal
    setModal(true)
    setTimeout(() => {
      setAnimarModal(true)

    }, 300);
  }

  const guardarGasto = gasto => { // función que agrega el gasto
    gasto.id = generarId() // agrega un id al gasto
    gasto.fecha = Date.now() // agrega la fecha del gasto
    setGastos([...gastos, gasto]) // agrega el gasto al estado de los gastos

    setAnimarModal(false) // oculta el modal
    setTimeout(() => {
      setModal(false) // oculta el modal
    }, 300);
    
  }


  return (
    <div className={modal ? 'fijar' : '' }>
      <Header
      gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      {isValidPresupuesto && (
        <>
        <main>
          <ListadoGastos
            gastos={gastos}
          />
        </main>
        <div className='nuevo-gasto'>
          <img src={IconoNuevoGasto} alt="Nuevo gasto" onClick={handleNuevoGasto} />
        </div>
        </>
      )}
      {modal && <Modal
        setModal={setModal}
        animarModal={animarModal}
        setAnimarModal={setAnimarModal}
        guardarGasto={guardarGasto}
      />}
    </div>
  )
}

export default App
