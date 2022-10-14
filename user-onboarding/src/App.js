import { useEffect, useInsertionEffect, useState } from "react";
import Form from './Form';
import Users from "./Users";
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log(users)
  }, [users])
  return (
    <div className="App">
      <Form currentUsers={users} addUser={setUsers}/>
      {users.length !== 0 && <Users users={users} />}
    </div>
  );
}

export default App;
