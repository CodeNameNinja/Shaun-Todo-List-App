import React, {useState, useEffect, useCallback, useMemo} from 'react';

import {Route, Redirect} from 'react-router-dom'

import MainHeader from './components/MainHeader';

import UserList from './webpages/Users';
import UserDetails from './webpages/UserDetails';
import UserFollowers from './webpages/UserFollowers';
import UserFollowing from './webpages/UserFollowing';
import UserRepos from './webpages/UserRepos';
import UserGists from './webpages/UserGists';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsersHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://api.github.com/users');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const transformedUsers = data.map(userData => {
        return {
          login: userData.login,
          type: userData.type,
          avatar: userData.avatar_url,
          name: userData.name,
          url: userData.url
        }
      });

      setUsers(transformedUsers);

    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchUsersHandler();
  }, [fetchUsersHandler]);


  return (
    <div>
      <MainHeader></MainHeader>
      <main>
        <Route path="/" >
          <Redirect to="/users"/>
        </Route>
        <Route path="/users">
          <UserList users={users}/>
        </Route>
        <Route path="/user/:id" exact>
          <UserDetails />
        </Route>
        <Route path="/user/:id/followers">
          <UserFollowers />
        </Route>
        <Route path="/user/:id/following">
          <UserFollowing />
        </Route>
        <Route path="/user/:id/repos">
          <UserRepos />
        </Route>
        <Route path="/user/:id/gists">
          <UserGists />
        </Route>
      </main>
    </div>
  );
}
export default App;
