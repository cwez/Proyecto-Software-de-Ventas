import React from "react";
import "./home.css";
import Usuario from "../user/user";

function Home (){
    return (
      <div id = "major">
        <div id="menu">
          <div id="infoperfil">
            <ul id="lista1">
              <li id="foto">
                <a>Foto</a>
              </li>
              <li>
                <a>Byron David</a>
              </li>
              
            </ul>
            
          </div>
          <div id="espacio"></div>
          <div id="logout">
                    <button id="Salir">Salir </button>
            </div>
        </div>
        <div className="Contenedor">
          <div className="Superior"></div>
          <div className="Inferior">
            <ul className="Lista">
              <li>
                <a href="#">hola</a>
              </li>
              <li>
                <a href="#">Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Home;