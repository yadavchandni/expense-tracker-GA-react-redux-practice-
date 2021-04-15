import React, { useContext } from "react";
import { GlobalContext } from "../../context/globalState";
import "../../css/expense-tracker.css";

export default function Balance(props) {
  const { transactions } = useContext(GlobalContext);
  // console.log(context);
  const amounts = transactions.map((transition) => props.transition.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <div>
        <h4>Your Balanace</h4>
        <h1 id="balance"> ${total}</h1>
      </div>
    </>
  );
}
