import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

// WE need a component level state so use hooks for  form  input.
export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }

    return (
        <>
        {/* All the id's are deleted, why? bc react does need them to grab the DOM.
            the classes are replaced with className bc of JSX.
            and the label for attribute is replaced with htmlFor.
        */}
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)}
                    placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                        >Amount <br />
                        (negative - expense, positive - income)</label
                    >
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form> 
        </>
    )
}
