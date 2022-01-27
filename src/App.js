import React, {Fragment, useState} from 'react';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';


function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (name, age) =>{
    setUsers([...users, {name, age, id:Math.random().toString()}]);
  }

  const getUserInfo = (info) =>{
    setUsers(info)
  }
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={users} onGet={getUserInfo}/>
    </Fragment>
  );
}

export default App;
