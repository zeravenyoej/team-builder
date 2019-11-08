import React, { useState } from 'react';

const Form = (props)=>{

    const [formValues, setFormValues]=useState({name: '', email: '', role: ''});

    const handleChange = (event) => {
        setFormValues({...formValues, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(formValues);
        const newFormValues = {...formValues};
        props.addNewCard(newFormValues);
        setFormValues({name: '', email: '', role: ''});
    };

    return (
        <form className="formDiv" onSubmit={handleSubmit}>
            <label>
                Name: 
                &nbsp;
                <input 
                type='text'
                name='name'
                value={formValues.name}
                placeholder='name'
                required
                onChange={handleChange}
                />
            </label>
            <br/>
            <label>
                Email: 
                &nbsp;
                <input 
                type='text'
                name='email'
                value={formValues.email}
                placeholder='email'
                required
                onChange={handleChange}
                />
            </label>
            <br/>
            <label>
                Role:
                &nbsp;  
                <input 
                type='text'
                name='role'
                value={formValues.role}
                placeholder='role'
                required
                onChange={handleChange}
                />
            </label>
            <br/>
            <button>Submit</button>
        </form>
    );
};


export default Form;