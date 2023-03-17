import React, {useState} from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const expense = props.items;
  const [filteredYear, setFilteredYear] = useState("2023");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }
  return (
    <Card className="expenses">
      <ExpenseFilter select={filteredYear} onChangeFilter={filterChangeHandler}/>
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
