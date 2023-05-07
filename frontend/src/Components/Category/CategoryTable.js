import React, {useState, useEffect} from "react";
import CategoryService from "../../Services/category.service";

const CategoryTable = () => {
    const [categories, setCategories] = useState([]);
    // Fetch user data from API
    useEffect(() => {
        async function fetchData() {
            const response = await CategoryService.getCategories();
            setCategories(response.data);
        }

        fetchData();
    }, []);

    return (
        <>
            <div className="table">
                <table>
                    <thead>
                    <tr style={{textAlign: "center"}}>
                        {["ID", "Name", "Description"].map(
                            (i, index) => (
                                <th key={index}>{i}</th>
                            )
                        )}
                    </tr>
                    </thead>
                    <tbody>
                    {categories?.content?.map((category) => (
                        <tr key={category.id}>
                            <td className="pl-4">{category.id}</td>
                            <td>
                                <span className="text-muted">{category.name}</span>
                            </td>
                            <td>
                                <span className="text-muted">{category.description}</span>
                            </td>
                            <td>

                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default CategoryTable;