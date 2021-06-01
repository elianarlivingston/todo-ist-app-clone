import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './views/user/Home'
import Project from './views/user/Project'
import NoMatch from './views/NoMatch'

import { LayoutCustom } from './components'


function App() {

  return (
    <Router>
        <LayoutCustom>
          <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route exact path="/project/:id">
                  <Project />
              </Route>
              
              <Route path="*">
                  <NoMatch />
              </Route>
          </Switch>
        </LayoutCustom>
    </Router>
  );
}

export default App;
