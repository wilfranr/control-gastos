import { useState } from 'react'
import Mensaje from './Mensaje'
import CerrarBtn from '../img/cerrar.svg'

const Modal = ( {setModal, animarModal, setAnimarModal, guardarGasto} ) => { // recibe una propiedad setModal que es una función que cambia el estado del modal
    
    const [nombre, setNombre] = useState('') // estado del nombre
    const [cantidad, setCantidad] = useState(0) // estado de la cantidad
    const [categoria, setCategoria] = useState('') // estado de la categoria
    const [mensaje, setMensaje] = useState('') // estado del mensaje
    
    const ocultarModal = () => { // función que oculta el modal
        setAnimarModal(false)
        
        setTimeout(() => {
            setModal(false)
        }, 300);
    }

    const handleSubmit = (e) => { // función que agrega el gasto
        e.preventDefault()
        if ([nombre, cantidad, categoria].includes('')) { // si alguno de los campos está vacío
            setMensaje('Todos los campos son obligatorios')
            setTimeout(() => {
                setMensaje('')
            }, 3000);
            return;
        }      
        guardarGasto({nombre, cantidad, categoria})
    }

  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img src={CerrarBtn} alt="Cerrar modal" onClick={ocultarModal}/>
        </div>
        <form onSubmit={handleSubmit} className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
            <legend>Nuevo gasto</legend>
            {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
            <div className='campo'>
                <label htmlFor="nombre">Nombre Gasto</label>
                <input 
                id='nombre'
                type="text" 
                placeholder='Añade el nombre del gasto'
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div className='campo'>
                <label htmlFor="cantidad">Cantidad</label>
                <input 
                id='cantidad'
                type="number" 
                placeholder='Añade la cantidad del gasto'
                value={cantidad}
                onChange={(e) => setCantidad(Number(e.target.value))}
                />
            </div>
            <div className='campo'>
                <label htmlFor="categoria">Categoría</label>
                <select name="categoria" id="categoria" value={categoria} onChange={ e => setCategoria(e.target.value)}>
                    <option value="" disabled>-- Seleccione --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="gastos">Gastos Varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="suscripciones">Suscripciones</option>
                    <option value="salud">Salud</option>
                </select>
            </div>
            <input type="submit" value="Añadir Gasto"/>
        </form>
    </div>
  )
}
    
export default Modal