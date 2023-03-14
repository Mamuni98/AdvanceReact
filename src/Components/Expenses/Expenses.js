import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
  const expense = props.items;
  return (
    <Card className="expenses">
      {expense.map((expns) => {
        return (
          <ExpenseItem
            key={expns.id}
            title={expns.title}
            amount={expns.amount}
            date={expns.date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
