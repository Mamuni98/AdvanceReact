import React from 'react';
import './ExpenseItem.css';

const ExpenseDetail = (props) =>{
    const titles = props.title;
    const amounts = props.amount;
 return (
    <div className="expense-item__description">
          <h2>{titles}</h2>
          <div className="expense-item__price">Rs.{amounts}</div>
        </div>
 )
}
 
export default ExpenseDetail;