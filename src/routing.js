import React from 'react';
import Lazylogin from './components/login/login.lazy'
import Lazydashboard from './components/dashboard/dashboard.lazy'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";

function Routing() {
    return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path="/"><Lazylogin to="/"/></Route>
        <Route path="/dashboard"><Lazydashboard to="dashboard"/></Route>
      </Switch>
      </div>
    </Router>
  );
}
 
export default Routing;
