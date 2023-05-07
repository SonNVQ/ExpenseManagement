import React, { useState, useRef } from "react";
import CheckButton from "react-validation/build/button";
// import UserService from "../../Services/user.service";
import Form from "react-validation/build/form";
import { API_SERVICE } from "../../Services/base-service";

const UpdateRecordPage = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [categories, setCategories] = useState('');
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState('');
  const [note, setNote] = useState('');
  const [name, setName] = useState('');
  /**
   * list functions
   */

    const onChangeCategories = (e) => {
        const cate = e.target.value;
        setCategories(cate);
        console.log(categories);
    };

  const handleCreate = async (e) => {
    e.preventDefault();
    console.log()
    const asd = {
        "name": categories,
        "note": note,
        "type": "EXPENSE",
        "amount": amount,
        "date": date,
        "categories": [2]
    }
    console.log(asd);
    const asd2 = await API_SERVICE.Records.getAll();
    console.log(asd2)
    // await API_SERVICE.Records.create('asd');
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>Update Income/Expense</h3>
      </header>

      <Form onSubmit={handleCreate} ref={form}>
        <div className="container d-flex mb-3">
            <div className="col-2">
                Categories
            </div>
            
            <div className="col-8">
                <input 
                        value={categories} 
                        type="text" 
                        onChange={onChangeCategories}/>
            </div>
        </div>

        <div className="container d-flex mb-3">
            <div className="col-2">
                Amount
            </div>
            
            <div className="col-8">
                <input type="number" value={amount} onChange={val => setAmount(val.target.value)}/>
            </div>
        </div>

        <div className="container d-flex mb-3">
            <div className="col-2">
                Date
            </div>
            
            <div className="col-8">
                <input type="date" value={date} onChange={val => setDate(val.target.value)}/>
            </div>
        </div>

        <div className="container d-flex mb-3">
            <div className="col-2">
                Type
            </div>
            
            <div className="col-8">
                <select className="form-select" aria-label="Default select example" style={{width: "300px"}}>
                    <option selected>Chọn một</option>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
            </div>
        </div>

        <div className="container d-flex mb-3">
            <div className="col-2">
                Note
            </div>
            
            <div className="col-8">
                <textarea value={note} onChange={val => setNote(val.target.value)}></textarea>
            </div>
        </div>

        <div className="container d-flex mb-3">
            <div className="col-2">

            </div>
            
            <div className="col-8">
            <button type="submit" className="btn btn-primary" >Update</button>
            </div>
        </div>
      </Form>
    </div>
  );
};

export default UpdateRecordPage;