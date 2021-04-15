//NPM MODULES
import "./App.css";

//CUSTOM PACKAGE
import Headers from "./pages/header";
import Balance from "./pages/balance";
import IncomeExpense from "./pages/incomeExpense";
import TransactionList from "./pages/TransactionList";
import AddTransaction from "./pages/addTransaction";
import { GlobalProvider } from "./context/globalState";
// import ExpenseTracker from "./pages/ExpenseTracker";

function App() {
  return (
    <GlobalProvider >
      <div>
        <Headers />
      </div>
      <div className="App">
        <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
