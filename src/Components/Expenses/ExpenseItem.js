//import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetail";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
   //const [title, setTitle] = useState(props.title);
  const clickHandle = () => {
    console.log("Clicked!!!");
  }
  const deleteItem = () => {
   document.getElementById("root").remove();
  }
  return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <ExpenseDetail title={props.title} amount={props.amount}/>
        <button onClick={clickHandle}>Click</button>
        <button onClick={deleteItem}>Delete Expense</button>
     </Card>
  );
}
export default ExpenseItem;