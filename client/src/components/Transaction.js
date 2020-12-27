import React, { useContext } from 'react'
import { GlobalContext } from './context/GlobalState'

export default function Transaction({transaction}) {
    const sign = transaction.amount < 0 ? '-' : '+';

    //delete
    const {deleteTransaction} = useContext(GlobalContext)

    return (
        <div>
            <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                    {transaction.text} <span> {sign}Rs. {Math.abs(transaction.amount)}</span> <button onClick={()=> deleteTransaction(transaction._id)} className="delete-btn"> X </button>
                </li>
        </div>
    )
}
