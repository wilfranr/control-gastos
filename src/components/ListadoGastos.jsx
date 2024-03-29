import React from 'react'
import Gasto from './Gasto' 

function ListadoGastos( {gastos} ) {
  return (
    <div  className='Listado-gastos contenedor'>
        <h2>{ gastos.length ? 'Gastos' : 'No hay gastos aún'}</h2>

        {gastos.map(gasto => ( 
            <Gasto 
                key={gasto.id}
                gasto={gasto}
            />
        ))}
                
    </div>
  )
}

export default ListadoGastos