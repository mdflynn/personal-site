import "./App.scss";
import WelcomePage from "../WelcomePage";
import Nav from "../Nav";
import Career from "../Career";
import Portfolio from "../Portfolio";
import Interests from "../Interests";
import Contact from "../Contact";
import { Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mike Flynn Codes</title>
      </Helmet>
      <Nav />
      <h1>⚠️⚠️SITE UNDER CONSTRUCTION⚠️⚠️</h1>

      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/personal-site" component={WelcomePage} />
        <Route exact path="/about" component={Career} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/interests" component={Interests} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </>
  );
}

export default App;
