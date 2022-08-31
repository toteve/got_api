//Contenido.jsx

// IMPORTA LOS HOOKS A UTILIZAR EN REACT
import { useState, useEffect } from "react";

// CONSTRUCCION DEL COMPONENTE
const Contenido = () => {

  // DEFINIMOS ESTADO INICIAL DEL ARREGLO COMO VACIO Y FUNCION DE SETEO
  const [info, setInfo] = useState([]);

  // FUNCION PARA CONSUMIR API
  const consultarInformacion = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    
    // https://game-of-thrones-quotes.herokuapp.com/v1/random

    const response = await fetch(url);
    const data = await response.json();
    console.log("Objeto Data de la api: ", data);
    setInfo(`${data.name} - ${data.email}`); // con setInfo actualizamos el estado de info

    // USANDO PROMESAS
    /* fetch(url)
      .then((response) => response.json())
      .then((data) => setInfo(`"${data.sentence}" - ${data.character.name}`)); */
  };

  // gancho para llamar a la funcion que consume el api, una sola vez solo cuando arranca el componente
  // ya una vez ejecutado useEffect  info ha sido actualizado su valor inicial con info de API
  useEffect(() => {
    consultarInformacion();
  }, []);


 
  // render de Contenido, con evento onClick que llamara a funcion para consumir API y actualizar info
  return (
    <div className="App">
      <h1>Frases de personajes de Game of Thrones</h1>
      {console.log(info[0])}
      <p>{info}</p>
      <button onClick={() => consultarInformacion()}>Consultar API</button>
    </div>
  );
};

export default Contenido;
