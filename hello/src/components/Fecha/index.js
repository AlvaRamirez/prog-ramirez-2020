import React from 'react';
import 'dayjs/locale/es'

const Fecha = (props)=>{
 //const diaDeHoy = dayjs((Date()).locale('es').format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A')
    return(
        <p>{diaDeHoy}</p>
    )
}

export default Fecha;