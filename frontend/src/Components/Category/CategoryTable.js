import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CategoryService from "../../Services/category.service";

function CategoryTable() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const response = await CategoryService.getCategories();
      setCategories(response.data);
    }
    fetchCategories();
  }, []);

  const handleDelete = async (id) => {
    await CategoryService.deleteCategory(id);
    setCategories(categories.filter((category) => category.id !== id));
  };

  return (
    <div>
      <h2 className="h3">Categories</h2>
      <Link to="/addCategory" className="btn btn--dark mt-2">
        Add Category
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.name}</td>
              <td>{category.description}</td>
              <td>
                <button
                  className="btn btn--danger"
                  onClick={() => handleDelete(category.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

}

export default CategoryTable;