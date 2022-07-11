const Mensaje = ( { children, tipo}) => { // tipo es una clase
  return (
    <div>
        <p className={`alerta ${tipo}`}>{children}</p> {/* muestra mensaje de error */}

    </div>
  )
}

export default Mensaje