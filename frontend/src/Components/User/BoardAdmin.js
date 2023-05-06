// import React, { useState, useEffect } from "react";

// import UserService from "../../Services/user.service";

// const BoardAdmin = () => {
//   const [content, setContent] = useState("");

//   useEffect(() => {
//     UserService.getAdminBoard().then(
//       (response) => {
//         setContent(response.data);
//       },
//       (error) => {
//         const _content =
//           (error.response &&
//             error.response.data &&
//             error.response.data.message) ||
//           error.message ||
//           error.toString();

//         setContent(_content);
//       }
//     );
//   }, []);

//   return (
//     <div className="container">
//       <header className="jumbotron">
//         <h3>{content}</h3>
//       </header>
//     </div>
//   );
// };

// export default BoardAdmin;

import React from "react";
import AuthService from "../../Services/auth.service";



const GetUsers = () => {
  const GetAllUsers = AuthService.getAllUsers();

  return (
    // <div className="container">
    //   <header className="jumbotron">
    //     <h3>
    //       <strong>{GetAllUsers.username}</strong> Profile
    //     </h3>
    //   </header>
    //   <p>
    //    <img src="https://picsum.photos/200" className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt=""/>
    //   </p>
      // <p>
      //   <strong>Email:</strong> {GetAllUsers.email}
      // </p>
    //   <p>
    //     <strong>Token:</strong> {GetAllUsers.token.substring(0, 20)} ...{" "}
    //     {GetAllUsers.token.substr(GetAllUsers.token.length - 20)}
    //   </p>
    //   <strong>Authorities:</strong>
    //   <ul>
    //     {GetAllUsers.roles &&
    //       GetAllUsers.roles.map((role, index) => <li key={index}>{role}</li>)}
    //   </ul>
    // </div>


    
    <div className="container">
      <thead className="jumbotron">
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Token</th>
          <th>Authorities</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      
        <tr>
          <td>{GetAllUsers.username}</td>
          <td>{GetAllUsers.email}</td>
          
          <td>{GetAllUsers.token.substring(0, 20)}</td>
          <td>{GetAllUsers.roles}</td>
          
          <div class="container-user-action">
            <div class="container-update">
              <a href="" class="btn-secondary">Update</a>
            </div>
            <div class="container-delete">
              <form action="/DeleteUser" method="post">
                <button type="submit" name="id" value="<?= $user->id ?>"
                  class="btn-danger"
                  onclick='return confirm("Delete this user?")'>
                  Delete
                </button>
              </form>
            </div>
          </div>
        </tr>
      </tbody>
    </div>

  );
};

export default GetUsers;