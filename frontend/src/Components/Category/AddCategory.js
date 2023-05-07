import React, { useState } from "react";
import CategoryService from "../../Services/category.service";
import authHeader from "../../Services/auth-header";

import {queries} from "@testing-library/react";
import {API_SERVICE} from "../../Services/base-service";


function AddCategoryForm() {
  const [category, setCategory] = useState({
    description: "",
    name: "",
  });

  const handleSubmit = async event => {
    event.preventDefault();

    console.log(event);

    const userLocalStorage = localStorage.getItem('user');
    const token = JSON.parse(userLocalStorage).token;
    // const response = await fetch("http://localhost:8090/api/categories", {
    //   method: "POST",
    //   headers: {
    //     'Authorization': `Bearer ${token}`,
    //     'Content-type': 'application/json'
    //   },
    //   mode: 'cors',
    //   body: JSON.stringify(category)
    // });
    // const response = CategoryService.addCategory(category.name, category.description);
    const response = await API_SERVICE.Categories.create(category);
    console.log(response);


    const data = await response.json();
    console.log(data);
    setCategory({
      description: "",
      name: "",

    });
      await CategoryService.addCategory(category.name, category.description);
      console.log("Category created successfully");
      window.location.replace = 'http://localhost:3000/category';
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setCategory(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="form-wrapper">
      <h2 className="h3">
        Create Category
      </h2>
    <form onSubmit={handleSubmit} >

      <div  className="grid-xs">
      <label>Name:</label>
      <input type="text" name="name"   placeholder="e.g., Groceries"  required value={category.name} onChange={handleChange} />
     </div>
  
      <div  className="grid-xs">
      <label>
        Description:   </label>
        <input type="text" name="description" value={category.description} onChange={handleChange}   placeholder="e.g., Go to meet my friends and enjoy the day." required/>
      </div>  
      <button className="btn btn--dark mt-2" type="submit">Add Category</button>
    </form>
  </div>
  );
}

export default AddCategoryForm;