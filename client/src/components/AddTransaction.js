import React, {useState, useContext} from 'react'
import { GlobalContext } from './context/GlobalState'
import {Link} from 'react-router-dom'

const getStyle = {
    color: 'brown',
    fontSize: '1.5rem',
}

export default function AddTransaction() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext)
    
    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 1000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }

    return (
        <>
         <h3> Add New Transaction</h3>
         <form onSubmit={onSubmit}>
             <div className="form-control">
                 <label for="text"> Text</label>
                 <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
             </div>
             <div className="form-control">
                <label for="amount"> Amount <br />
                 '-' for Expense and '+' for Income </label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount..." />
             </div>
             <button className="btn"> Add Transaction</button>
         </form>
         <Link to="/contact" style={getStyle}>Contact Me</Link> 
        </>
    )
}