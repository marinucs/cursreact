import './App.css';
import Header from './Header';
import FunctionalComponent from './FunctionalComponent.js';
import ClassComponent from './ClassComponent';

function App() {

  const propFunc1 = "Holi";

  const objecteExemple = {
    nom: "Anna",
    edat: 19
  }

  return (
    <>
      <div className='bg-primary card'>
        <Header/>
      </div>
      <br/>
      <div>
        <FunctionalComponent
          propsFunctional1 = { propFunc1 }
          propsFunctional2String = "cadenaDeTexte1"
          propsFunctional3Number = { 5 }
          propsFunctional4Object = { objecteExemple }
          />
      </div>
      
      <br/>
      
      <div>
        <ClassComponent
            propsFunctional1 = { propFunc1 }
            propsFunctional2String = "cadenaDeTexte1"
            propsFunctional3Number = { 5 }
            propsFunctional4Object = { objecteExemple }
            />
      </div>
    </>
    );
  }
  
  export default App;