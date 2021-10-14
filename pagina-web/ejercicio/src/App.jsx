import './styles/styles.css';
import Pagina_principal from './pages/PAG_PRINCIPAL';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ADMIN_VENTAS from './pages/ADMIN_VENTAS';
import REGISTRO_VENTA from './pages/REGISTRO_VENTAS';

function App() {
  return (
    <Router>
      <Switch>
        <Route path = '/administrador_ventas'>
          <ADMIN_VENTAS/>
        </Route>
        <Route path ='/registro_ventas'>
          <REGISTRO_VENTA/>
        </Route>
        <Route path = '/'>
          <Pagina_principal/>
        </Route>
      </Switch>
    </Router>
  )
}
export default App;
