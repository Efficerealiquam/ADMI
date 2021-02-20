import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

import "./App.css";
import Gallery from "./components/Gallery";
import Menu from "./components/Menu";
import Home from "./pages/Home";

function App() {
  return (
    <div className="cont_app">
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/gallery" component={Gallery}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
