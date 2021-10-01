import React from 'react';
import {Route} from 'react-router-dom'
import './index.scss';
import SignIn from './pages/SignIn';
import Join from './pages/Join';
import Main from './pages/Main';
import Users from './pages/Users';
import UserInfo from './pages/UserInfo';
import Profile from './pages/Profile';
import Search from './pages/Search'


import Movie from './pages/Movie';

function App() {

  return (
    <div>
      <Route path='/sign-in' component={SignIn} exact />
      <Route path='/join' component={Join} exact />
      <Route path='/' component={Main} exact />
      <Route path='/users' component={Users} exact />
      <Route path='/movie/' component={Movie}/>
      <Route path='/user/' component={UserInfo}/>
      <Route path='/profile' component={Profile} exact/>
      <Route path='/search' component={Search} />
    </div>
  );
}

export default App;
