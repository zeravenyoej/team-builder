import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Data from './Data';
import TeamCard from './Components/TeamCard';
import Form from './Components/Form';


function App() {

  const [teamMembers, setTeamMembers] = useState(Data);
  console.log(teamMembers);

  return (
    <div className="App">

      <Route path='/' render={(props)=>
        <TeamCard 
          teamMembers={teamMembers}
          /> 
      }/>

      <Route path='/' render={(props)=>
        <Form
        setTeamMembers={setTeamMembers}
        />
      }/>
    </div>
  );
}

export default App;
