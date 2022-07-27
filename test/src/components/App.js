import './App.css';
import FunctionalComponent from './FunctionalComponent.js';
import ClassComponent from './ClassComponent';
import FunctionalComponent1 from './FunctionalComponent1.js';
import {useState} from 'react';

function App() {

  const propFunc1 = "Holi";

  const objecteExemple = {
    nom: "Marina",
    edat: 31
  }

  const [data, setData] = useState("");

  const childToParent = (dataFromChild) => {
    console.log("child to parent", dataFromChild);
    setData(dataFromChild);
  }
  
  return (
    <>
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
      <div>
          {data}
          <FunctionalComponent1 childToParent = { childToParent }
          />
      </div>
    </>
    );
  }
  
  export default App;