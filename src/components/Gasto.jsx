import React from 'react'
import { getFecha } from '../helpers'
import IconoAhorro from '../img/icono_ahorro.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoGastos from '../img/icono_gastos.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'


const diccionarioIconos = {
    ahorro: IconoAhorro,
    casa: IconoCasa,
    gastos: IconoGastos,
    ocio: IconoOcio,
    salud: IconoSalud,
    suscripciones: IconoSuscripciones,
    comida: IconoComida
}

const Gasto = ({gasto}) => { // componente que muestra un gasto
    const { categoria, nombre, cantidad, id, fecha  } = gasto; // destructuración de los datos del gasto
  return (
    <div className='gasto sombra'>
        <div className='contenido-gasto'>
            <img src={diccionarioIconos[categoria]} alt="icono gasto" />
            <div className='descripcion-gasto'>
                <p className='categoria'>{categoria} </p>
                <p className='nombre-gasto'>{nombre} </p>
                <p className='fecha-gasto'> 
                    Agregado el: {''}
                    <span>{ getFecha(fecha) }</span>
                </p>

            </div>

        </div>
        <p className='cantidad-gasto'>${cantidad}</p>

    </div>
  )
}

export default Gasto