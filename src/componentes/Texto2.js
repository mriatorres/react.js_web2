import React from 'react';

function Texto2(props){

    return(
    
    <div className='contenedor_texto'>
    <h3 className='titulo1'>{props.titulo}</h3>
    <p className='texto1'>
    {props.texto}
    </p>

    </div>
    
    );
    
    {/*Exportar el componente para utilizarlo en el programa principal*/}
    
    }export default Texto2