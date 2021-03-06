import {Link} from 'react-router-dom';
import logo from '../logo.png';
import logoGoogle from '../google.png';
import '../Estilos/inicio.css';
import GoogleLogin from 'react-google-login';

function Inicio() {
  const responseGoogle=(respuesta)=>{
    console.log(respuesta);
  }
  return (
    <div className="container">
        <div className="General">
              <div className="Login">
                  <div className="LogoSS">
                      <img src={logo} classNameName='logo' alt='logo' id="logo"/>
                  </div>
                  <div className="textoIS">
                      <span id="IS">Iniciar sesión</span>
                  </div>
                  
                  <form action="" className="formulario">
                      <div className="entradaTextoCedula">
                          <input  type="cedula" id="cedula" />
                          <label for="cedula">Número de cedula</label>
                      </div>
                      <div className="entradaTextoContraseña">
                          <input  type="contraseña" id="contraseña" />
                          <label for="contraseña">Contraseña</label>
                      </div>
  
                  
                  
                  
                      <div className="olvideContraseña">
                          <button id="olvide">Olvidé mi contraseña</button>
                      
                      </div>
  
                  <div className="Botones_1">
                      
                          <button id="Acceder">Acceder  </button>
                          <Link to='/registro'><button id="Registrar">Regístrate  </button></Link>
                     
                  </div>
                  
                  <div id="div_google">
                  <div className="Google">
                      <GoogleLogin
                    clientId="415572449376-ks71dn2e1rc9o1q9olchksf2fmurl48d.apps.googleusercontent.com"
                    render={renderProps => (
                      <button id="Google" onClick={renderProps.onClick} disabled={renderProps.disabled}> <img src={logoGoogle} id="logoGoogle" alt='logoGoogle'/> Iniciar con Google</button>
                    )}
                    //buttonText="Iniciar con Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}/>
                      </div>
                  </div>
                  
                  </form>
    
              </div>
        </div>
  
    </div>
  
    );
  }
  
  export default Inicio;
