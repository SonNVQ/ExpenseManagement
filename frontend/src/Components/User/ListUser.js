const ListUser = () => {
    
    const datavovan = [
        { email: 'tieuhoa@asd.com', username: "Learn React", status: "completed" },
        { email: 'tieuhoa@asd.com3', username: "Do something", status: "incomplete" },
        { email: 'tieuhoa@asd.com2', username: "Do something else", status: "incomplete" },
    ];

    return (
        <div className="">
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Account Name</th>
                </tr>
            </thead>
            <tbody>
                {
                    datavovan.map((todo, index) => (
                        <tr>
                            <th scope="row">{index}</th>
                            <td>{todo.email}</td>
                            <td>{todo.username}</td>
                            <td>{todo.status}</td>
                        </tr>
                    ))
                }
            </tbody>
            </table>
        </div>
    )
}

export default ListUser