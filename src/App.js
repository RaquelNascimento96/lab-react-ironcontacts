import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './Components/ContactList/contacts.json';

import ContactList from './Components/ContactList/index';

function App() {
  return (
    <div className="App">
      <h1>react app for producer's contacts</h1>
      <ContactList />
    </div>
  );
}

export default App;
