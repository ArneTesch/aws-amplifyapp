import React from 'react';
import logo from './logo.svg';
import './App.css';

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

const App: React.FC = () => {

  return (
    <div className="App">
      <header>
        <img src={ logo } className="App-logo" alt="logo" />
        <h1>We now have Authentication!</h1>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);