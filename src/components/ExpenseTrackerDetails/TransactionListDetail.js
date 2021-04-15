import React, { useContext } from "react";
import { GlobalContext } from "../../context/globalState";
import TransactionItemList from "./transactionItemList";

export default function TransactionListDetail() {
  const { transactions } = useContext(GlobalContext);
  // console.log(context)
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <TransactionItemList key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
}
