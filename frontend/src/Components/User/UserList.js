import React from "react";
import { useState } from "react";
import AuthService from "../../Services/auth.service";


const GetUsers = () => {
  // const UserList = AuthService.getAllUsers();
  // const GetAllUsers =[
  const [users, setUsers] = useState([
    { id: 1, email: "nam1@gmail.com", fullname: "namnam1", username: "nam1" },
    { id: 2, email: 'nam2@gmail.com', fullname: "namnam2", username: 'nam2' },
    { id: 3, email: 'nam3@gmail.com', fullname: "namnam3", username: 'nam3' },

  ])


  const deleteById = id => {
    setUsers(oldValues => {
      return oldValues.filter(users => users.id !== id)
    })
  }



  // return (
  //   <div className="App">
  //     <ul>
  //       {users.map(users => {
  //         return (
  //           <li key={users.id}>
  //             <span>{users.username}</span>
  //             <button onClick={() => deleteById(users.id)}>Delete</button>
  //           </li>
  //         )
  //       })}
  //     </ul>
  //   </div>
  // )




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
        
          
           { // users.map((todo, id) => (
            //   <tr>
            //     <td>{todo.id}</td>
            //     <td>{todo.username}</td>
            //     <td>{todo.email}</td>
            //     <td>{todo.role}</td>
            //     <div class="container-user-action">
            //       <div class="container-update">
            //         <a href="" class="btn-secondary">Update</a>
            //       </div>
            //       <div class="container-delete">
            //         <form action="/users/delete" method="post">
            //           <button type="submit" name="id" value="<?= $user->id ?>"
            //             class="btn-danger"
            //             // onclick='return confirm("Delete this user?")'>
            //             onclick={() => deleteById(users.id)}>
            //             Delete
            //           </button>
            //         </form>
            //       </div>
            //     </div>
            //   </tr>
            // ))
           }
            <tbody>
              {users.map(users => (
                
                  <tr key={users.id}>
                    <td>{users.email}</td>
                    <td>{users.fullname}</td>
                    <td>{users.username}</td>
                    
                    <div class="container-update">
                     <a href="/Profile" class="btn-secondary">Update</a>
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