import './App.css';
import InfoBox from "./components/InfoBox/InfoBox";


const App = ({children}) => {
  const closeInfo = () => {
    alert("Has cerrado correctamente el aviso")
  }
  return <>
  <InfoBox title="Mantenimiento" type="info" onClose={closeInfo}>
    <p>Hoy el sistema estará en mantenimiento a las 22:00h.</p>
  </InfoBox>
  <InfoBox title="Recordatorio" type="warning" onClose={closeInfo}>
    <p>Has completado todas tus tareas de hoy.</p>
  </InfoBox>
  <InfoBox title= "Éxito" type="success">
    <p>Recuerda guardar tus cambios antes de cerrar la aplicación.</p>
  </InfoBox>
  </>;
}

export default App;
