import "./App.css";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect,
  withRouter,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./Dashboard";

function App(props) {
  return (
    <>
      <div>
        <p
          style={
            props.location.pathname === "/home" ? { backgroundColor: "green" } : {}
          }
        >
          <Link to="/home">Home</Link>
        </p>
        <p
          style={
            props.location.pathname === "/about" ? { backgroundColor: "green" } : {}
          }
        >
          <Link to="/about">About</Link>
        </p>
        <p
          style={
            props.location.pathname === "/dashboard"
              ? { backgroundColor: "green" }
              : {}
          }
        >
          <Link to="/dashboard">Dashboard</Link>
        </p>
      </div>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/dashboard" component={Dashboard} />
        <Redirect exact from="/" to="/dashboard" />
        <Route path="*" component={() => <div>404 not found</div>} />
      </Switch>
    </>
  );
}

export default withRouter(App);
