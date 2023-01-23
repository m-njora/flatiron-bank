import React, { useState } from "react";
//import Transaction from "./Transactions"

const url ="https://mutheki-flatiron-bank.vercel.app/transactions/"

function AddTransactionForm() {
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [amount, setAmount] = useState("")

  function handleSubmit(e) {
    e.preventDefault();

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        date: date,
        description: description,
        category: category,
        amount: amount,
      }),
    });
     alert("added successfully")
  }
  return (
    <div className="search">
      <form onSubmit={handleSubmit} className="ui form">
        <div className="submit">
          <input value={date} onChange={(e) => setDate(e.target.value)} type="date" name="date" required/>
          <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" name="description" placeholder="Description" required/>
          <input value={category} onChange={(e) => setCategory(e.target.value)} type="text" name="category" placeholder="Category" required/>
          <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" name="amount" placeholder="Amount" step="0.01" required/>
        </div>
        <button className="button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;

