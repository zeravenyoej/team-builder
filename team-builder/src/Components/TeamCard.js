import React from 'react';

const TeamCard=(props)=>{
    console.log('THIS ONE', props.teamMembers)
    return(
        // props.teamMembers && 
        // props.teamMembers
        props.teamMembers.map((mem, index)=> 
            <div className='card' key={index}>
                <h1>{mem.name}</h1>
                <h2>{mem.email}</h2>
                <h3>{mem.role}</h3>
            </div>
        )
    );
};
export default TeamCard;