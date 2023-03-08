import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetail";
import Card from "../UI/Card"

const ExpenseItem = (props) => {
  const clickHandle = () => {
    console.log("Clicked!!!");
  }
  const deleteItem = () => {
    console.log("Delete Expense");
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