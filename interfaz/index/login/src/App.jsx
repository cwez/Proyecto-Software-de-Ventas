import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import Inicio from './Inicio.jsx';



function App() {
  
  return (
    <Router>
      <Switch> 
         <Route path="/" exact>
             <Inicio/>
          </Route>
       </Switch>
   </Router>
  
  );
}

export default App;
