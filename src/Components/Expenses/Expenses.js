import React, {useState} from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }
  return (
    <Card className="expenses">
      <ExpenseFilter select={filteredYear} onChangeFilter={filterChangeHandler}/>
      {props.items.map((expens) => {
        return (
          <ExpenseItem
            key={expens.id}
            title={expens.title}
            amount={expens.amount}
            date={expens.date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
