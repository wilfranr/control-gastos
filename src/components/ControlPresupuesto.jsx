import { useState, useEffect } from "react"

const ControlPresupuesto = ( { gastos, presupuesto } ) => { // props

    const [disponible, setDisponible] = useState(0) // estado del presupuesto
    const [gastado, setGastado] = useState(0) //    estado del gasto

    useEffect(() => { // función que calcula el presupuesto disponible
        const totalGastado = gastos.reduce((total, gasto) => total + gasto.cantidad, 0) // suma los gastos
        setGastado(totalGastado) // asigna el gasto al estado
        setDisponible(presupuesto - totalGastado) // asigna el presupuesto disponible
    }, [gastos]) // cada vez que se agrega un gasto se ejecuta la función


    const formatearCantidad = cantidad => { // formatea la cantidad
        return cantidad.toLocaleString('en-uS', { 
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0
            })
    }
    return (
        <div className="contenedorpresupuesto contenedor sombra dos-columnas">
            <div>
                <p>grafica</p>
            </div>
            <div className="contenido-presupuesto">
                <p>
                    <span> Presupuesto: </span> {formatearCantidad(presupuesto)}
                </p>
                <p>
                    <span> Disponible: </span> {formatearCantidad(disponible)}
                </p>
                <p>
                    <span> Gastado: </span> {formatearCantidad(gastado)}
                </p>

            </div>
        </div>
    )
}

export default ControlPresupuesto