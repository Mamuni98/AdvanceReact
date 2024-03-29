import React, {useState} from "react";
import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";


  const Dummy_expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2022, 5, 12),
    },
  ];

  const App =() => {
  const [expenses, setExpenses] = useState(Dummy_expenses);
  const addNewExpenseHandler = (newExpense) =>{
    setExpenses((prevExpense) => {
     return [newExpense, ...prevExpense];
    });
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addNewExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started..."),
  //   React.createElement(Expenses, {items:{expenses}})
  // );
}

export default App;
