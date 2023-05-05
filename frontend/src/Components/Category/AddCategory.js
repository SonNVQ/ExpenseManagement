import React, { useState } from "react";
import CategoryService from "../../Services/category.service";
import authHeader from "../../Services/auth-header";
function AddCategoryForm() {
  const [category, setCategory] = useState({
    description: "",
    name: "",
    user_id: ""
  });

  const handleSubmit = async event => {
    event.preventDefault();
    const response = await fetch("http://localhost:8090/api/categories", {
      method: "POST",
      headers: {
        headers: authHeader() 
      },
      body: JSON.stringify(category)
    });
    const data = await response.json();
    console.log(data);
    setCategory({
      description: "",
      name: "",
      user_id: ""
    });
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
      <div  className="grid-xs">
      <label>
        User ID:    </label>
        <input type="text" name="user_id" value={category.user_id} onChange={handleChange} />
        </div>    
      <button className="btn btn--dark mt-2" type="submit">Add Category</button>
    </form>
  </div>
  );
}

export default AddCategoryForm;