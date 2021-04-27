import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Homepage from "./components/homepage/layout";
import Register from "./components/register/signup";
import Signin from "./components/signin/login";
import Programme_page from "./components/programme/programme_page";
import Programme_List from "./components/programme/programme_list";
import NotFound from "./components/notfound/error";

function App() {
  const history = createBrowserHistory()

  return (
    <div className="App">
      <Router history = {history}>
        <Switch>
          <Route 
            exact 
            path = "/" 
            component={Homepage}
          />
          <Route  
            path = "/register" 
            component={Register}
          />
          <Route  
            path = "/login" 
            component={Signin}
          />
          <Route  
            path = "/programme" 
            component={Programme_page}
          />
          <Route  
            path = "/programme-list" 
            component={Programme_List}
          />
          <Route  
            component={NotFound}
          />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
