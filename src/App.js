import { useState } from 'react';
import "./App.css";
import "./info.css";
import "./texto.css";
import Info from "./componentes/Info";
import Texto from "./componentes/Texto";
import Texto2 from "./componentes/Texto2";
import Contador from "./componentes/agregar";
import Saludo from "./componentes/saludo";
import Suscribirse from "./componentes/suscribirse";
import FormInput from './componentes/formInput';


function App() {

  /* Formulario */
  const [message, setMessage] = useState('');

  const initialValues = {
    firstName: '',
    lastName: '',
    emailAddress: '',
  };

  const submit = (form) => {
    setMessage(`Gracias por suscribirte, ${form.firstName} ${form.lastName}! Te enviamos un correo a ${form.emailAddress}.`);
  };

  return (
    <div className="App">
      <div className="contenedor_main">
        <h1 className="title">Zarigüeyas</h1>
        <Texto
          titulo="Las Zarigüeyas"
          texto="Este noble marsupial es primo de los canguros y, como ellos, tiene una bolsa​ en el vientre en la que carga sus crías. De hábitos nocturnos, es amante de las frutas e inofensivo para nosotros. Quienes sí le temen son algunos animales pequeños como los ratones e insectos."
        />
        <Info titulo="Bartolomeo (Didelphis marsupialis)" imagen="zarigueya2" />
        <Info titulo="Cristina (Mallodelphys lanatus)" imagen="zarigueya1" />
        <Info titulo="Pedro (Cryptonanus chacoensis)" imagen="zarigueya3" />
        <Texto2
          titulo="Funciones"
          texto="Las zarigüeyas son de gran beneficio debido a que son controladores de serpientes venenosas y dispersores de semillas, son omnívoros (se alimentan de animales y plantas) y cumplen un rol importante para el medio ambiente.
        ¡Cuidemos de ellas!"
        />
        <Contador />

        
         <h1 className='form_title'>Suscribirse</h1>

      <Suscribirse submit={submit} initialValues={initialValues}>
        <FormInput 
          label="Nombre" 
          name="firstName" />
        <FormInput 
          label="Apellido" 
          name="lastName" />
        <FormInput 
          label="E-mail" 
          type="email" 
          name="emailAddress" />
      </Suscribirse>

      <p className='form_message'>{message}</p>
      </div>
    </div>
  );
}

export default App;
