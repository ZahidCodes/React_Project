import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const clickHandler=()=>{
    console.log("clicked!!!")
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        {/* <h2>{props.location}</h2> */}
        <div className='expense-item__price'>Rs{props.amount}</div>
        <button onClick={clickHandler}>Delete Item</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;