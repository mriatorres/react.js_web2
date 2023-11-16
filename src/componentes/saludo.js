import React, { useEffect } from 'react'
import "./saludo.css";

  function Saludo () {
    
    useEffect(function () {
    //Posición
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(showPosition);
    }else{
      console.log("El navegador no soporta la geolocalización");
    }
    
    function showPosition(position){
        alert("Gracias por visitarnos desde " + position.coords.latitude + " " + position.coords.longitude)
    }
  })

  return console.log("hola")
}

export default Saludo