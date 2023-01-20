import React from "react";
import Transaction from "./Transactions";
function TransactionsList({transactions}) {
  const list = transactions.map((item)=>{
    return <Transaction key={item.id} date={item.date} description={item.description} category={item.category} amount={item.amount} />;
  })
  return (
    <table className="table">
      <tbody>
        <tr>
          <th>
            <h3 className="th">Date</h3>
          </th>
          <th>
            <h3 className="th">Description</h3>
          </th>
          <th>
            <h3 className="th">Category</h3>
          </th>
          <th>
            <h3 className="th">Amount</h3>
          </th>
        </tr>
        
        {list}
      </tbody>
    </table>
  );
}

export default TransactionsList;
