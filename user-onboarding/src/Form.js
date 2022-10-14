import React, { useEffect, useState } from "react";
import * as yup from "yup";
import axios from "axios";

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

const errStyle = {
    color: "red",
    fontWeight: 600
}

function Form(props) {

    const { currentUsers, addUser} = props;

    const [formInput, setFormInput] = useState(initMember);
    const [errors, setErrors] = useState(initMember);
    const [disabledButton, setDisabledButton] = useState(true);

    const setFormErorrs = (name, value) => {
        yup.reach(schema, name).validate(value)
            .then(() => setErrors({...errors, [name]: value}))
            .catch((error) => setErrors({...errors, [name]: error.errors[0]}))
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = name === "agree" ? event.target.checked : event.target.value;
        setFormErorrs(name, value)
        setFormInput({...formInput, [name]: value})
    }

    const submit = (event) => {
        event.preventDefault();
        axios.post("https://reqres.in/api/users", formInput)
            .then(res => {
                addUser([...currentUsers, res.data]);
                setFormInput(initMember);
                setErrors(initMember);
            })
            .catch(err => {
                console.log(`There was an error: ${err}`)
            })
    }

    useEffect(() => {
        schema.isValid(formInput)
            .then(valid => setDisabledButton(!valid))
        console.log(formInput)
    }, [formInput])

    return (
    <>
        <h1>Join the Community</h1>
        <p>Fill out the form below: </p>

        <form onSubmit={submit}>
            {errors.fName !== formInput.fName && <p style={errStyle}>{errors.fName}</p>}
            <label htmlFor="fName">First Name: </label>
            <input 
                type="text"
                id="fName"
                name="fName"
                onChange={handleChange}
                value={formInput.fName}
            />
            <br />
            {errors.lName !== formInput.lName && <p style={errStyle}>{errors.lName}</p>}
            <label htmlFor="lName">Last Name: </label>
            <input 
                type="text"
                id="lName"
                name="lName"
                onChange={handleChange}
                value={formInput.lName}
            />
            <br />
            {errors.email !== formInput.email && <p style={errStyle}>{errors.email}</p>}
            <label htmlFor="email">Email Address: </label>
            <input 
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                value={formInput.email}
            />
            <br />
            {errors.password !== formInput.password && <p style={errStyle}>{errors.password}</p>}
            <label htmlFor="password">Password: </label>
            <input 
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                value={formInput.password}
            />
            <br />
            {errors.agree !== formInput.agree && <p style={errStyle}>{errors.agree}</p>}
            <label htmlFor="agree">Do you agree to the terms and servies? </label>
            <input 
                type="checkbox"
                id="agree"
                name="agree"
                onChange={handleChange}
                checked={formInput.agree}
            />
            <br />
            <button type="submit" disabled={disabledButton}>Submit</button>
        </form>
    </>
    );
}

export default Form;