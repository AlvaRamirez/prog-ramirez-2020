import React from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/es' 

const Fecha = ( {fecha} ) => {
    const diaDeHoy = dayjs(fecha).locale('es').format('DD/MM/YYYY')
    
    return(
        <p>{ diaDeHoy }</p>
    )
}

export default Fecha;