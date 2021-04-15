import React, { Component } from 'react';
import './App.css';
import Expenses from './components/Expenses';

const App = () =>{
  const expenses = [{
    id: 'e1',
    title: 'Risoles',
    amount: 29.5,
    date: new Date(2021,8,10)
  },
  {
    id: 'e2',
    title: 'Buras',
    amount: 22.5,
    date: new Date(2021,10,10)
  },
  {
    id: 'e3',
    title: 'Kroket',
    amount: 21.5,
    date: new Date(2021,12,25)
  }];

    return (
      <div className="App">
         <h2>Let's Buy Menu in Ramadhan</h2> 
          <Expenses detail={expenses}></Expenses>
      </div>
    );
} 

export default App;
