import ExpenseFrom from './ExpenseForm.component';
import './NewExpense.styles.css'
import {useState} from 'react'


const NewExpense = (props) => {
    const [isEditind, setIsEditind] = useState(false)


    const saveExpeaseDataHandler = (enteredExpenceData) => {
        const expenseData = {
            ...enteredExpenceData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setIsEditind(false)
    }


    const startEditingHandler = () => {
        setIsEditind(true)
    }

    const stopEditingHandler = () => {
        setIsEditind(false)
    }

    return (
        <div className='new-expense'>
            {
            isEditind?
            <ExpenseFrom onCancel={stopEditingHandler} onSaveExpeaseData={saveExpeaseDataHandler} />
            :<button onClick={startEditingHandler}>Add New Expense</button>
            }
        </div>
    )
}


export default NewExpense;