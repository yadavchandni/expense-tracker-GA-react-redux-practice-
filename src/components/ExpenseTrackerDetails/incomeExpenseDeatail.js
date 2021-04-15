import React, { useContext } from "react";
import { GlobalContext } from "../../context/globalState";
import "../../css/expense-tracker.css";
export default function IncomeExpenseDeatail() {
  //USECONTEXT is Context provides both a consumer and a provider
  //Link: https://upmostly.com/tutorials/how-to-use-the-usecontext-hook-in-react
  const { transactions } = useContext(GlobalContext);

  //LOOP FUNCTION
  const amounts = transactions.map((transaction) => transaction.amount);
// console.log(amounts);

  //TOTAL AMOUNT PLUS
  const income = amounts.filter((item) => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
  // console.log(income);

  //MINUS AMOUNTS
  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *-1 ).toFixed(2);
    
  return (
    <div>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">
            {income}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">
            {expense}
          </p>
        </div>
      </div>
    </div>
  );
}
