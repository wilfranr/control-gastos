export const generarId = () => { 
    const random = Math.random().toString(36).substr(2, 9); // remove `0.` from result
    const fecha = new Date().getTime().toString(36).substr(2, 9); // remove `0.` from result
    return random + fecha; // concatenate
    }

    export const getFecha = fecha => { // fecha es un string
        const fechaFormateada = new Date(fecha); // fecha es un string
        const opciones = { // fecha es un string
            year: 'numeric',
            month: 'long',
            day: '2-digit',
        }
        return fechaFormateada.toLocaleDateString('es-ES', opciones); // fecha es un string
    }



