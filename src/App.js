import {Route} from 'react-router-dom'

import React from 'react';
import UserDetails from './webpages/UserDetails';
import Users from './webpages/Users';

import MainHeader from './components/MainHeader';

function App() {
  return (
    <div>
      <MainHeader></MainHeader>
      <main>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/user/:id">
          <UserDetails/>
        </Route>
      </main>
    </div>
  );
}
export default App;
