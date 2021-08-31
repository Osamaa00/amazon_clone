import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { useEffect } from 'react';
import Header from './Header';
import './App.css';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase'

function App() {

  const [{ user }, dispatch] = useStateValue();

  // runs on based on a given condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if ( authUser ){
        // the user is loggedin
        dispatch({
          type: "SET_USER",
          user: authUser
         })
      }
      else{
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    });

    return () => {
      // cleanup functionality
      // detached the listener and reattaches it on rerender
      unsubscribe();
    }
  }, []);

  console.log(user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
              <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
