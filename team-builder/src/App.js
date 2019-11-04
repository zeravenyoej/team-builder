import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './Data';
import Form from './Components/Form';

function App() {

  const [teamMembers, setTeamMembers] = useState(Data);
  console.log(teamMembers);
  
  return (
    <div className="App">
      <Form/>
    </div>
  );
}

export default App;
