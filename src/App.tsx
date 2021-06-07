import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './views/user/Home'
import Project from './views/user/Project'
import NoMatch from './views/NoMatch'

import { LayoutCustom, LayoutDefault } from './components'


function App() {

  return (
    <Router>
          <Switch>
              <Route exact path="/">
                <LayoutCustom>
                  <Home />
                </LayoutCustom>
              </Route>

              <Route exact path="/project/:id">
                <LayoutCustom>
                  <Project />
                </LayoutCustom>
              </Route>
              
              <Route path="*">
                <LayoutDefault>
                  <NoMatch />
                </LayoutDefault>
              </Route>
          </Switch>
    </Router>
  );
}

export default App;

