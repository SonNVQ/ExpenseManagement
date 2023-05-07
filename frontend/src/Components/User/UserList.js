import React from "react";
import { useState } from "react";
import AuthService from "../../Services/auth.service";


const GetUsers = () => {
  // const UserList = AuthService.getAllUsers();
  const GetAllUsers = AuthService.getAllUsers();
  
  const [users, setUsers] = useState([
    { id: 1, email: "HiepdvHE163693@gmail.com", fullname: "Hiep Dao", username: "fmafu" },
    { id: 2, email: 'adadadada@gmail.com', fullname: "dddd", username: 'fmafu1' },
    { id: 3, email: 'dddd@gmail.com', fullname: "âsass", username: 'fmafu2' },

  ])



  const deleteById = id => {
    setUsers(oldValues => {
      return oldValues.filter(users => users.id !== id)
    })
  }

  return (
    <div className="Container">
      <table class="jumbotron">
        <thead>
          <tr>
            <th>Email</th>
            <th>FullName</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>




        <tbody>
          {users.map(users => (

            <tr key={users.id}>
              <td>{users.email}</td>
              <td>{users.fullname}</td>
              <td>{users.username}</td>

              <div class="container-update">
                <a href="" class="btn-secondary">Update</a>
              </div>
              <button type="submit" name="id" value="<?= $user->id ?>"
                class="btn-danger" onClick={() => deleteById(users.id)}>Delete</button>
            </tr>

          ))}
        </tbody>


      </table>
    </div>
  );
};

export default GetUsers;