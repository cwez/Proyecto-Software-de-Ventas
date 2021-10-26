import React from "react";
import GoogleLogin from "react-google-login";
import logo from "../img/logo.png";
// import google from "../img/google.png";
import "./login.css";

function Login() {
  function responseGoogle(response) {
    if (response && response.tokenId) {
      fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: response.tokenId,
          email: response.profileObj.email,
          nombres: response.profileObj.givenName,
          apellidos: response.profileObj.familyName,
        }),
      })
        .catch((err) => console.error(err))
        .then((repuesta) => repuesta.json())
        .then((respuestaServidor) => {
          localStorage.setItem("token", response.tokenId);
          localStorage.setItem(
            "usuario",
            JSON.stringify(respuestaServidor.usuario)
          );
          console.log(respuestaServidor);
          window.location.href = "/home";
        });
    }
  }
  return (
    <div>
      <div className="container">
        <div class="General">
          <div class="Login">
            <div class="LogoSS">
              <img src={logo} className="logo" alt="logo" id="logo" />
            </div>
            <div class="textoIS">
              <span id="IS">Iniciar sesión</span>
            </div>

            <form action="" class="formulario">
              <div class="entradaTextoCedula">
                <input type="cedula" id="cedula" />
                <label for="cedula">Número de cedula</label>
              </div>
              <div class="entradaTextoContraseña">
                <input type="password" id="contraseña" />
                <label for="contraseña">Contraseña</label>
              </div>
            </form>
            <form>
              <div>
                <div class="olvideContraseña">
                  <button id="olvide">Olvidé mi contraseña</button>
                </div>
              </div>

              <div class="Botones 1">
                <div class="Google">
                  {/* aquí lo de google */}
                  <GoogleLogin
                    clientId="415572449376-ks71dn2e1rc9o1q9olchksf2fmurl48d.apps.googleusercontent.com"
                    buttonText="Acceder con Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                  />
                </div>
                <div class="Acceder">
                  <button id="Acceder">Acceder </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
