import React from 'react';
import Contact from './components/Contact.js'
import ContactList from './components/ContactList'

function App() {
  return (
    <div className="App">
      <Contact avatar = "https://randomuser.me/api/portraits/men/25.jpg" name = "John Connor" isOnline />

      <Contact avatar = "https://randomuser.me/api/portraits/women/34.jpg" name = "Sarah Connor" isOnline  />

      <Contact avatar = "https://randomuser.me/api/portraits/men/3.jpg" name = "Chico Lopez"  />

      <ContactList/>


    </div>
  );
}

export default App;
