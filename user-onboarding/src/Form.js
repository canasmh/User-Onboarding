import React, { useState } from "react";

const initMember = {
    fName: '',
    lName: '',
    email: '',
    password: '',
    agree: false
}

function Form(props) {

    const [formInput, setFormInput] = useState(initMember);

    return (
    <>
        <h1>Join the Community</h1>
        <p>Fill out the form below: </p>

        <form>
            <label htmlFor="fName">First Name: </label>
            <input 
                type="text"
                id="fName"
                name="fName"
            />
            <br />
            <label htmlFor="lName">Last Name: </label>
            <input 
                type="text"
                id="lName"
                name="lName"
            />
            <br />
            <label htmlFor="email">Email Address: </label>
            <input 
                type="email"
                id="email"
                name="email"
            />
            <br />
            <label htmlFor="password">Password: </label>
            <input 
                type="password"
                id="password"
                name="password"
            />
            <br />
            <label htmlFor="agree">Do you agree to the terms and servies? </label>
            <input 
                type="checkbox"
                id="agree"
                name="agree"
            />
            <br />
            <button type="submit">Submit</button>
        </form>
    </>
    );
}

export default Form;