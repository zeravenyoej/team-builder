import React from 'react';

const Form = ()=>{

    return (
        <form>
            <label>
                Name: 
                <input 
                type='text'
                value=''
                placeholder='name'
                />
            </label>
            <label>
                Email: 
                <input 
                type='text'
                value=''
                placeholder='email'
                />
            </label>
            <label>
                Role:  
                <input 
                type='text'
                value=''
                placeholder='role'
                />
            </label>
        </form>
    );
};


export default Form;