import React from "react"; 


function UserCard(props) {
    const { fName, lName, email, password, agree} = props.user;
    return (
        <div>
            <h3>{fName} {lName}</h3>
            <p><strong>Email: </strong> {email}</p>
            <p><strong>Password: </strong> {password}</p>
            <p><strong>Agreed? </strong>{agree ? "Yes" : "No"}</p>
        </div>
    )
}

export default UserCard;