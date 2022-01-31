import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    // const expenses = [
    //     { id: 123, name: "Coffee", cost: 50 },
    //     { id: 123, name: "Dinner party", cost: 300 },
    //     { id: 123, name: "Trip", cost: 70 },
    //     { id: 123, name: "Tranportation", cost: 40 },
    //     { id: 123, name: "Shopping", cost: 500 },
    // ];

    return (
        <ul className='list-group'>
            {expenses.map((expense) => (
                <ExpenseItem
                    id={expense.id}
                    name={expense.name}
                    costs={expense.cost} />
            ))}
        </ul>
    );
};

export default ExpenseList;
