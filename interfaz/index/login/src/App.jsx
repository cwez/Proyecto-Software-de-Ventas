import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import Inicio from './Pages/Inicio.jsx';
import Registro from './Pages/registrar.jsx';



function App() {
  
  return (
    <Router>
      <Switch> 
         
          <Route path="/registro" exact>
             <Registro/>
          </Route>
          <Route path="" exact>
             <Inicio/>
          </Route>
       </Switch>
   </Router>
  
  );
}

export default App;
