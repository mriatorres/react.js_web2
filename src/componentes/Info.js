import React from 'react';
import zarigueya1 from '../imagenes/zarigueya1.jpg';
import zarigueya2 from '../imagenes/zarigueya2.jpg';
import zarigueya3 from '../imagenes/zarigueya3.jpg';

function Info(props){

return(

<div className='contenedor'>

{/* agregamos una imagen */}


 <h2 className='contenedor1'>{props.titulo}</h2>

 <img src={require(`..//imagenes/${props.imagen}.jpg`)}  className="contendor_imagen" alt="contenedor imagen"
 />
{/* Insertar texto al componente */}


</div>

);

{/*Exportar el componente para utilizarlo en el programa principal*/}

}export default Info