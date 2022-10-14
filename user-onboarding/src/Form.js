import React, { useEffect, useState } from "react";
import * as yup from "yup";

const initMember = {
    fName: '',
    lName: '',
    email: '',
    password: '',
    agree: false
}

const schema = yup.object().shape({
    fName: yup.string().required("Enter your First Name").min(3, "Name must be at least 3 characters long"),
    lName: yup.string().required("Enter your Last Name").min(3, "Name must be at least 3 characters long"),
    email: yup.string().email("Please Enter a valid Email").required("Please enter a valid Email"),
    password: yup.string().required("Please enter a password").min(7, "Password must be at least 7 characters long"),
    agree: yup.boolean().oneOf([true], "You must agree to Terms and Conditions")

})

function Form(props) {

    const [formInput, setFormInput] = useState(initMember);

    const handleChange = (event) => {
        const value = event.target.name === "agree" ? event.target.checked : event.target.value;
        
        setFormInput({...formInput, [event.target.name]: value})
    }

    useEffect(() => {
        console.log(formInput)
    }, [formInput.fName, formInput.lName, formInput.email, formInput.password, formInput.agree])

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
                onChange={handleChange}
                value={formInput.fName}
            />
            <br />
            <label htmlFor="lName">Last Name: </label>
            <input 
                type="text"
                id="lName"
                name="lName"
                onChange={handleChange}
                value={formInput.lName}
            />
            <br />
            <label htmlFor="email">Email Address: </label>
            <input 
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                value={formInput.email}
            />
            <br />
            <label htmlFor="password">Password: </label>
            <input 
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                value={formInput.password}
            />
            <br />
            <label htmlFor="agree">Do you agree to the terms and servies? </label>
            <input 
                type="checkbox"
                id="agree"
                name="agree"
                onChange={handleChange}
                checked={formInput.agree}
            />
            <br />
            <button type="submit">Submit</button>
        </form>
    </>
    );
}

export default Form;