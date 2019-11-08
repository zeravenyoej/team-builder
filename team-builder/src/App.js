import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Data from './Data';
import TeamCard from './Components/TeamCard';
import Form from './Components/Form';


function App() {

  const [teamMembers, setTeamMembers] = useState(Data);

  const addNewCard = newData  => {
    setTeamMembers([...teamMembers, newData]);
  };

  console.log(teamMembers);

  return (
    <div className="App">
      <Form addNewCard={addNewCard}/>
      <TeamCard teamMembers={teamMembers}/>
    
    </div>
  );
};

export default App;
