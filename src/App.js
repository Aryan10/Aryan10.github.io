import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import AppRouter from './AppRouter';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Shivam Aryan</title>
        <meta name="description" content="Personal website" />
        <meta name="theme-color" content="#008f68"/>
        <link rel="icon" type="image/png" href="https://avatars.githubusercontent.com/u/28479908?s=400&u=50f3352da607d9459c7afb776d579ed8ab5a4b77&v=4" sizes="16x16" />
      </Helmet>
      <AppRouter />
    </div>
  );
}

export default App;
