import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import homelogo from "../img/home (1).png";
import ss from "../img/logo.png";
import logouser from "../img/man-user.png";
import logosales from "../img/discount.png";
import logologout from "../img/logout.png";
import "./usuarios.css";

function ListarUsuarios() {
  let [loggedUser, setLoggerUser] = useState(
    localStorage.getItem("usuario")
      ? JSON.parse(localStorage.getItem("usuario"))
      : null
  );

  let [token, setToken] = useState(true);
  let [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const tokenStorage = localStorage.getItem("token");
    if (tokenStorage && loggedUser.rol === "Administrador") {
      fetch("http://localhost:8080/usuarios", {
        headers: {
          "Content-Type": "application/json",
          token: tokenStorage,
        },
      })
        .catch((err) => console.error(err))
        .then((response) => response.json())
        .then((usuarios) => {
          setUsuarios(usuarios.usuarios);
          console.log(usuarios);
        });
    } else {
      alert("No estás autorizado para esta función");
      setToken(false);
    }
  }, []);

  function actualizarUsuario(e, usuario) {
    // Llamar al servidor
    const tokenStorage = localStorage.getItem("token");
    const rol = e.target.value;
    const activado = e.target.value;
    fetch("http://localhost:8080/actualizarUsuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: tokenStorage,
      },
      body: JSON.stringify({
        email: usuario.email,
        nombres: usuario.nombres,
        apellidos: usuario.apellidos,
        rol: rol,
        activado: activado,
      }),
    })
      .catch((err) => console.error(err))
      .then((response) => response.json())
      .then((usuarios) => {
        alert("El usuario fue actualizado con exito");
      });
  }

  return (
    <div>
      <div id="major">
        <div id="menu">
          <div id="infoperfil">
            <ul id="listaFN">
              <li id="foto">
                <a>Foto</a>
              </li>
              <li>
                <a>
                  Byron David
                  {/* <Usuario></Usuario> */}
                </a>
              </li>
            </ul>
          </div>
          <div id="espacio"></div>
          <div id="logout">
            <button id="Salir">
              {" "}
              <img
                src={logologout}
                className="logologout"
                alt="logologout"
                id="logologout"
              />{" "}
              Salir{" "}
            </button>
          </div>
        </div>
        <div id="general">
          <div id="inferior">
            <ul id="Lista">
              <li>
                <a href="http://localhost:3000/home" id="primero">
                  {" "}
                  <h1>
                    <img
                      src={homelogo}
                      className="homelogo"
                      alt="homelogo"
                      id="homelogo"
                    />
                    Salesoft
                  </h1>
                </a>
              </li>
              <li>
                <a href="http://localhost:3000/listarUsuarios" id="segundo">
                  <h1>
                    <img
                      src={logouser}
                      className="logouser"
                      alt="logouser"
                      id="logouser"
                    />
                    Usuarios
                  </h1>
                </a>
              </li>
              <li>
                <a href="http://localhost:3000/Ventas" id="tercero">
                  <h1>
                    <img
                      src={logosales}
                      className="logosales"
                      alt="logosales"
                      id="logosales"
                    />
                    Ventas
                  </h1>
                </a>
              </li>
            </ul>
          </div>
          <div id="contenido">
            {!token && <Redirect to="/login" />}
            <table>
              <caption>Usuarios</caption>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Rol</th>
                  <th>Accion</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((usuario) => (
                  <tr key={usuario._id}>
                    <td>{usuario._id}</td>
                    <td>{usuario.nombres}</td>
                    <td>{usuario.apellidos}</td>
                    <td>{usuario.rol}</td>
                    <td>
                      <select
                        onChange={(e) => {
                          actualizarUsuario(e, usuario);
                        }}
                        value={usuario.rol}
                      >
                        <option value="Administrador">Administrador</option>
                        <option value="Ventas">Ventas</option>
                        <option value="Pendiente">Pendiente</option>
                      </select>
                    </td>
                    <td>{usuario.activado}</td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListarUsuarios;
