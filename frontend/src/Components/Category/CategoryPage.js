import React from "react";
import AddCategoryForm from "./AddCategory";
import CategoryTable from "./CategoryTable";
// assets
import wave from "../../assets/wave.svg";

const CategoryPage = () =>{
    return (
     <div  className="flex-lg">
    <AddCategoryForm/>
    <CategoryTable/>
    <img src={wave} alt="" />
     </div>
    );
}

export default CategoryPage;