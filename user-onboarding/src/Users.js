import React from "react";
import UserCard from "./UserCard";

function Users(props) {
    const { users } = props;
    return (
        <>
            <h2>Our Current Team Members</h2>
            {users.map((user, index) => (
                <UserCard user={user} key={index}/>
                )
            )}
        </>
    )
}

export default Users;