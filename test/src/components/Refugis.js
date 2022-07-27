import React from "react";
import { useParams } from "react-router-dom";

function Refugis() {
  
    //Guardem en el console log els parametres que rebem
  console.log("useParams", useParams());
  const { id } = useParams();
  
  return (
    <>
      <h1>Llista de refugis</h1>
      <ul>
        <li>
          <a href="/refugis/1">Refugi 1</a>
        </li>
        <li>
          <a href="/refugis/2">Refugi 2</a>
        </li>
      </ul>
      <h2>El refugi seleccionat és {id}</h2>
    </>
  );
}

export default Refugis;