import { useEffect, useState } from "react";
import { API_SERVICE } from "../../Services/base-service"
import App from "../../App";
import { Link } from "react-router-dom";

const ListRecordPage = () => {
    const [content, setContent] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const res = await API_SERVICE.Records.getAll();
            setContent(res);
            console.log(content)
        }
        fetchData();
      }, []);
    return (
        <div className="d-flex row">
            <div className="col-3 mx-0 px-0 mb-3">
                <button className="btn btn-primary" style={{color: 'white !important'}}>
                    <Link style={{color: 'white'}} to="/add-expense">Create Expense</Link>
                </button>
            </div>
            <table>
                <thead>
                    <tr>
                    <th className="text-center">ID</th>
                    <th className="text-center">Name</th>
                    <th className="text-center">Note</th>
                    <th className="text-center">Type</th>
                    <th className="text-center">Amount</th>
                    <th className="text-center">Date</th>
                    <th className="text-center">Categories</th>
                    <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {content?.content?.map((row) => (
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.note}</td>
                        <td>{row.type}</td>
                        <td>{row.amount}</td>
                        <td>{row.date}</td>
                        <td>{row.categories[0].name}</td>
                        <td>
                        <Link className="mx-3" style={{color: 'white'}} to={`/update-expense?id=${row.id}`}>Update</Link>
                        <Link style={{color: 'white'}} to="/delete-expense">Delete</Link>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListRecordPage