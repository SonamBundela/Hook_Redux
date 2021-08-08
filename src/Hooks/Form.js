import React, { useState } from 'react'

function Form() {
    const [fullname, setFullName] = useState({
        fname: '',
        lastname: '',
        email: '',
    });
    const inputEvent = (event) => {
        const { name, value } = event.target;
        setFullName((prevalue) => {
            return {
                ...prevalue,
                [name]: value,
            };
        });
    }
    const onSubmit = (event) => {
        event.preventDefault();
        alert("form submit")
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <h1>Hello</h1>
                <input type="text"
                    placeholder="My name"
                    name="fname"
                    onChange={inputEvent}
                    value={fullname.fname} /><br></br><br></br>

                <input type="text"
                    placeholder="My Last name"
                    name="lastname"
                    onChange={inputEvent}
                    value={fullname.lastname} /><br></br><br></br>

                <input type="text"
                    placeholder="My email"
                    name="email"
                    onChange={inputEvent}
                    value={fullname.email} /><br></br><br></br>

                <button type="submit">Click me</button>
            </form>
        </div>




    )
}

export default Form
