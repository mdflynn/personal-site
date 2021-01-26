import './App.scss';
import WelcomePage from '../WelcomePage';
import Nav from '../Nav';
import About from '../About';
import Portfolio from '../Portfolio';
import Interests from '../Interests';
import Contact from '../Contact';
import { Route, Switch} from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path='/' component={WelcomePage} />
        <Route exact path='/about' component={About} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/interests' component={Interests} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </>
  );
}

export default App;
