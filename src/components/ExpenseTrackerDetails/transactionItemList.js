import React, { useContext } from "react";
import { GlobalContext } from "../../context/globalState";


export default function TransactionItemList({ transaction }) {
  const {deleteTransaction} = useContext(GlobalContext);
// console.log(deleteTransaction);

  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <div>
        {/* Dyanamic CSS where minus is red and plus is green */}
      <li className={transaction.amount<0 ? 'minus' : 'plus'}>
        {transaction.text}
        <span>
          {sign}$
          {Math.abs(transaction.amount)}
        </span>
        <button onClick={()=>deleteTransaction(transaction.id)} className="delete-btn" >Del</button>
      </li>
    </div>
  );
}
