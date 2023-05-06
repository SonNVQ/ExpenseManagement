import React from "react";
import AuthService from "../../Services/auth.service";

const GetUsers = () => {
  const GetAllUsers = AuthService.getAllUsers();

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{GetAllUsers.username}</strong> Profile
        </h3>
      </header>
      <p>
       <img src="https://picsum.photos/200" className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt=""/>
      </p>
      <p>
        <strong>Email:</strong> {GetAllUsers.email}
      </p>
      <p>
        <strong>Token:</strong> {GetAllUsers.token.substring(0, 20)} ...{" "}
        {GetAllUsers.token.substr(GetAllUsers.token.length - 20)}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {GetAllUsers.roles &&
          GetAllUsers.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
    </div>
  );
};

export default GetUsers;