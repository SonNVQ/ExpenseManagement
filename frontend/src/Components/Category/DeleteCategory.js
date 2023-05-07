import React from "react";
import CategoryService from "../../Services/category.service";

function DeleteCategory(props) {

  const handleDelete = async () => {
    try {
      await CategoryService.deleteCategory(props.category.id);
      props.setCategories(props.categories.filter(category => category.id !== props.category.id));
      console.log("Category deleted successfully");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button className="btn btn--dark mt-2" onClick={handleDelete}>Delete Category</button>
  );
}

export default DeleteCategory;