import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./SearchBar";
import AddTransactionForm from "./Form";
const url= "https://api.npoint.io/a9436ce6c3491d89d286/transactions/"

function AccountContainer() {
  const [transaction, setTransaction] = useState([])
  const [query, setQuery] = useState("")
  useEffect(() => {
    fetch(url + query)
      .then((resp) => resp.json())
      .then(transaction => setTransaction(transaction))
  }, [query])
  function handleSearch(e) {
    setQuery(e.target.value)
  }
  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddTransactionForm />
      <TransactionsList transactions={transaction} />
    </div>
  );
}

export default AccountContainer;
