import { useState } from 'react'
import Mensaje from './Mensaje'
const NuevoPresupuesto = ( {presupuesto, setPresupuesto, setIsValidPresupuesto} ) => {

    const [ mensaje, setMensaje ] = useState('') // mensaje de error

    const handlePresupuesto = (e) => { // captura el presupuesto
        e.preventDefault()
        if (!presupuesto|| presupuesto < 0) { // si no hay presupuesto o es menor a 0
            setMensaje('Presupuesto inválido') // muestra mensaje de error
            return // termina la ejecucion
        }
        setMensaje('') // muestra mensaje de validacion
        setIsValidPresupuesto(true) // cambia el estado del presupuesto

    
    }


  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form onSubmit={handlePresupuesto} className='formulario'>
            <div className='campo'>
                <label htmlFor="">Definir Presupuesto</label>
                <input 
                type="number" 
                className='nuevo-presupuesto' 
                placeholder='Añade tu Presupuesto' 
                value={presupuesto}
                onChange={e => setPresupuesto(Number(e.target.value))} // captura el presupuesto
                />
            </div>
            <input type="submit" value="Añadir" /> 
            {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
        </form>
    </div>
  )
}

export default NuevoPresupuesto




