import ExpenseItem from "./ExpenseItem.component";
import "./ExpensesList.styles.css";

const ExpensesList = (props) => {

  if (props.items.length === 0) {
      return <h2 className="expenses-list__fallback">Found no expanses.</h2>
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          month={expense.date.toLocaleString("en-US", { month: "long" })}
          year={expense.date.getFullYear()}
          day={expense.date.toLocaleString("en-US", { day: "2-digit" })}
          key={expense.id}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
