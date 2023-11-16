import React, { useState } from 'react'
import "./agregar.css";

function Contador() {
  const [count, setCount] = useState(0)
  return (
    <div className='donate_container'>
        <h3 className='title_donate'>Dona dinero al programa de conservación y cuidado de Zarigüeyas - PCCZ</h3>
      <span className='span_donate'>Voy a donar ${count}</span> <br></br>

      <button onClick={() => setCount(count + 1)} className='button_donate'>

        Incrementar monto a donar
      </button>
    </div>
  )
}

export default Contador