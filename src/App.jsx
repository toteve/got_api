//App.jsx
// importa los hook a utilizar
import { useState, useEffect } from "react";
import LeerApi from "./LeerApi";

// otra forma de usar el export default
export default function App() {
  //Estado del formulario: los 2 inputs del formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Efecto cuando el componente es cargado la primera vez y cada vez actualizado los estados
   /* useEffect(() => {
     console.log("Componente App cargado");
   }); */

  //Efecto cuando el componente es cargado solo la primera vez
   /* useEffect(() => {
     console.log("Componente cargado");
   }, []); */

  // Efecto solo cuando el campo email cambia en el formulario
   /* useEffect(() => {
     console.log("El email cambió su estado");
   }, [email]); */

  // Efecto cuando el campo password cambia en el formulario
   /* useEffect(() => {
     console.log("El password cambió su estado");
   }, [password]); */

  /* useEffect(() => {
      // Montaje inicial

     return () => {
       //Limpieza
     };
  }, [third]); //Actualización */

  return (
    <div className="App">
      <h1>Manejo de efectos en react</h1>
      <form>
        <input
          type="email"
          placeholder="email"
          name={email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          name={password}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>

      {/* Componente cargado condicionalmente si el password es igual a 123456 */}
      {password === "123456" && <LeerApi />}
    </div>
  );
}
