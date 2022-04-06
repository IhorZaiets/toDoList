import ExpenceDate from './ExpenseDate.component';
import './ExpenseItem.styles.css';
import Card from '../UI/Card.component'

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenceDate month={props.month} day={props.day} year={props.year} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;