
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import PaginaPrincipal from './Pages/PaginaPpal';
import Registrar from './Pages/registrar';
import Modificar from './Pages/modificar';
import Consultar from './Pages/consultar';


function App() {
  return (
    <Router>
      <Switch> 
         <Route path="/registrar" exact>
             <Registrar/>
          </Route>
          <Route path="/modificar" exact>
             <Modificar/>
          </Route>
          <Route path="/consultar" exact>
             <Consultar/>
          </Route>
          <Route path="/" exact>
             <PaginaPrincipal/>
          </Route>
      </Switch>
   </Router>
  );
}

export default App;
