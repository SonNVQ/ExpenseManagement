import React from "react";


const GetUsers = () => {
  // const GetAllUsers = AuthService.getAllUsers();
  const GetAllUsers = [
    { username: "nam1", email: "nam1@gmail.com", role: "ROLE_USER" },
    { username: 'nam2', email: 'nam2@gmail.com', role: 'ROLE_ADIMN' },
    { username: 'nam3', email: 'nam3@gmail.com', role: 'ROLE_USER' },
  ]

  return (
    <div className="">
      <table class="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Authority</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            GetAllUsers.map((todo, index) => (
              <tr>
                <td>{todo.username}</td>
                <td>{todo.email}</td>
                <td>{todo.role}</td>
                <div class="container-user-action">
                  <div class="container-update">
                    <a href="/users/update?id=<?= $user->id ?>" class="btn-secondary">Update</a>
                  </div>
                  <div class="container-delete">
                    <form action="/users/delete" method="post">
                      <button type="submit" name="id" value="<?= $user->id ?>"
                        class="btn-danger"
                        onclick='return confirm("Delete this user?")'>
                        Delete
                      </button>
                    </form>
                  </div>
                </div>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default GetUsers;