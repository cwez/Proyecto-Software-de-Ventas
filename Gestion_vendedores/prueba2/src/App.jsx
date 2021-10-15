
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import './Estilos/Styles.css';
import PaginaPrincipal from './Pages/PaginaPpal';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/">
             <PaginaPrincipal/>
          </Route>
          <Route path="/">
             <PaginaPrincipal/>
          </Route>
          <Route path="/">
             <PaginaPrincipal/>
          </Route>
          <Route path="/">
             <PaginaPrincipal/>
          </Route>
      </Switch>
      </Router>
  );
}

export default App;
