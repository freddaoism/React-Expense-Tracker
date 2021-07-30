import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, {useState} from 'react';


const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Bear Skin Rug",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { 
  id: "e2", 
  title: "Life Insurance", 
  amount: 799.49, 
  date: new Date(2021, 2, 12) 
  },
  {
    id: "e3",
    title: "Cucumber",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450.33,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
        return [expense, ...prevExpenses];    
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
