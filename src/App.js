import "./App.css";
import "./info.css";
import "./texto.css";
import Info from "./componentes/Info";
import Texto from "./componentes/Texto";
import Texto2 from "./componentes/Texto2";

function App() {
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
      </div>
    </div>
  );
}

export default App;
