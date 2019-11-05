import React, { useState } from 'react';

const Form = (props)=>{

    const addNewMember = (event) => {
        const handleChange = props.handleChange;
        handleChange(event)
    }

    return (
        <form className="formDiv">
            <label>
                Name: 
                &nbsp;
                <input 
                type='text'
                name='name'
                value={props.teamMembers.name}
                placeholder='name'
                onChange={event=>addNewMember(event)}
                />
            </label>
            <br/>
            <label>
                Email: 
                &nbsp;
                <input 
                type='text'
                name='email'
                value={props.teamMembers.email}
                placeholder='email'
                onChange={event=>addNewMember(event)}
                />
            </label>
            <br/>
            <label>
                Role:
                &nbsp;  
                <input 
                type='text'
                name='role'
                value={props.teamMembers.role}
                placeholder='role'
                onChange={event=>addNewMember(event)}
                />
            </label>
        </form>
    );
};


export default Form;