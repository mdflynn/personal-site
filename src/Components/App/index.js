import './App.scss';
import WelcomePage from '../WelcomePage';
import Nav from '../Nav';
import { Route, Switch} from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path='/' component={WelcomePage} />
      </Switch>
    </>
  );
}

export default App;
