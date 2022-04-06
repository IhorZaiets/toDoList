import Card from "../UI/Card.component";
import "./Expense.styles.css";
import ExpensesFilter from "./ExpensesFilter.component";
import { useState } from "react";
import ExpensesList from "./ExpensesList.component";
import ExpensesChart from '../Expenses/ExpensesChart.component'

const Expense = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  const filteredChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filteredChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expense;
