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
  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  })
  return (
    <Card className="expenses">
      <ExpenseFilter select={filteredYear} onChangeFilter={filterChangeHandler}/>
      {filteredExpense.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
