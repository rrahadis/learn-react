import React from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const Expenses = (props) => {
  return (
    <div className = "expenses">
      <ExpenseItem
        title={props.detail[0].title}
        amount={props.detail[0].amount}
        date={props.detail[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.detail[1].title}
        amount={props.detail[1].amount}
        date={props.detail[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.detail[2].title}
        amount={props.detail[2].amount}
        date={props.detail[2].date}
      ></ExpenseItem>
    </div>
  );
};

export default Expenses;
