// import SearchBar from "./components/ui/SearchBar.js";
import BusinessDetail from "./views/BusinessDetail.js";
import BusinessSearch from "./views/BusinessSearch.js";
// import ErrorMessage from "./components/ui/ErrorMessage.js";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <BusinessSearch />
        </Route>
        <Route exact path="/businesses/:id">
          <BusinessDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
