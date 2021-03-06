import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Login from './components/Login';
import Spinner from 'react-spinkit';

function App() {

  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
          <AppLoadingContent>
            <img src="https://cdn.brandfolder.io/5H442O3W/as/pl546j-7le8zk-199wkt/Slack_Mark.svg" alt=""></img>
            <Spinner 
              name="circle"
              color="purple"
              fadeIn="none"
            />
          </AppLoadingContent>
      </AppLoading>
    )
  }

  return (
    <div className="app">

      <Router>
        {!user ? (
          <Login/>
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route path="/" exact>
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        )}

      </Router>

    </div>
  );
}

export default App;

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100vw;
`;

const AppLoadingContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;

  > img {
    height: 100px;
    padding: 20px;

  }  
`;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
