import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import { PrivateRoute } from './context/AuthContext'
import Home from './views/user/Home'
import Project from './views/user/Project'
import Login from './views/Login'
import Register from './views/Register'
import NoMatch from './views/NoMatch'

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects/123">Projecto 123</NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <PrivateRoute path="/projects/:id" auth={true}>
          <Project />
        </PrivateRoute>

        <PrivateRoute exact path="/" auth={true}>
          <Home />
        </PrivateRoute>

        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
