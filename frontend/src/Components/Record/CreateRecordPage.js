import React, { useState, useRef, useEffect } from "react";
import Form from "react-validation/build/form";


const CreateRecordPage = () => {
    const form = useRef();
    const [categories, setCategories] = useState('');
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState('');
    const [note, setNote] = useState('');
    const [name, setName] = useState('');
    const [typeRecord, setTypeRecord] = useState('');
    const [isCreateSuccess, setIsCreateSuccess] = useState(false);
    /**
     * list functions
     */

    const onChangeCategories = (e) => setCategories(e.target.value);
    const handleSelectExpense = (e) => setTypeRecord(e.target.value);

    useEffect(() => {
        const fetchCategory = () => {
            
        }
    })

    const handleCreate = async (e) => {
        e.preventDefault();
        console.log(categories)
        // const record = {
        //     "name": name,
        //     "note": note,
        //     "type": typeRecord.toUpperCase(),
        //     "amount": amount,
        //     "date": date,
        //     "categories": [2]
        // }
        // const res = await API_SERVICE.Records.create(record);
        // console.log(res);
        // if (res) {
        //     setIsCreateSuccess(true)
        // };
    }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>Create Income/Expense</h3>
      </header>

      <Form onSubmit={handleCreate} ref={form}>
      <div className="container d-flex mb-3">
            <div className="col-2">
                Name
            </div>
            
            <div className="col-8">
                <input 
                    value={name} 
                    type="text" 
                    onChange={(val) => setName(val.target.value)}/>
            </div>
        </div>

        <div className="container d-flex mb-3">
            <div className="col-2">
                Categories
            </div>
            
            <div className="col-8">
            <select className="form-select" aria-label="Default select example" style={{width: "300px"}} onChange={onChangeCategories}>
                    <option selected>Chọn một</option>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
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
                <select className="form-select" aria-label="Default select example" style={{width: "300px"}} onChange={handleSelectExpense}>
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
            <button type="submit" className="btn btn-primary" >Create</button>
            </div>
        </div>

        <div className="container d-flex mb-3">
            {isCreateSuccess ? 'Create Success' : 'Fail to create'}
        </div>
      </Form>
    </div>
  );
};

export default CreateRecordPage;