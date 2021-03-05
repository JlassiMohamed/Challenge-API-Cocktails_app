import { Route, Switch } from "react-router-dom";
import error from "./assets/404.jpg";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Drink from "./components/Drink";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/drinks/:idDrink" component={Drink} />
        <Route path="/*" render={() => <img src={error} alt="error" />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
