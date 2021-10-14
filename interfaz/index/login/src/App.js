import logo from './logo.png';
import logoGoogle from './google.png';
import './App.css';
import GoogleLogin from 'react-google-login';

function App() {
  const responseGoogle=(respuesta)=>{
    console.log(respuesta);
  }
  return (
  <div class="container">
      <div class="General">
            <div class="Login">
                <div class="LogoSS">
                    <img src={logo} className='logo' alt='logo' id="logo"/>
                </div>
                <div class="textoIS">
                    <span id="IS">Iniciar sesión</span>
                </div>
                
                <form action="" class="formulario">
                    <div class="entradaTextoCedula">
                        <input  type="cedula" id="cedula" />
                        <label for="cedula">Número de cedula</label>
                    </div>
                    <div class="entradaTextoContraseña">
                        <input  type="contraseña" id="contraseña" />
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
                    <GoogleLogin
                  clientId="415572449376-ks71dn2e1rc9o1q9olchksf2fmurl48d.apps.googleusercontent.com"
                  render={renderProps => (
                    <button id="Google" onClick={renderProps.onClick} disabled={renderProps.disabled}> <img src={logoGoogle} id="logoGoogle"/> Iniciar con Google</button>
                  )}
                  //buttonText="Iniciar con Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={'single_host_origin'}/>
                    </div>
                    <div class="Acceder">
                        <button id="Acceder">Acceder  </button>
                    </div>
                </div>
                
                </form>
  
            </div>
      </div>
  </div>
  );
}

export default App;
