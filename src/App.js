import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './pages/HomeScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginScreen from './pages/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selecUser } from './features/userSlice';
import ProfileScreen from './pages/ProfileScreen';

function App() {

  const user = useSelector(selecUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth)
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        })
        )
      } else {
        dispatch(logout());
      }
    })

    return unSubscribe;
  }, [dispatch])

  return (
    <div className="app">
      <Router>
        {
          !user ? (
            <LoginScreen />
          ) : (
            <Switch>
              <Route path='/profile' component={ProfileScreen} />
              <Route path='/' component={HomeScreen} />
            </Switch>
          )
        }
      </Router>
    </div>
  );
}

export default App;
