import React ,{ useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

import { Transaction } from './Transaction';

export const TransactionLists=()=> {
    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
                <ul className="list">
                    {transactions.map(transaction => (<Transaction keys={transaction.id}  transaction={transaction} />))}
               </ul>
        </>
    )
}

  // this is teansactions only - <li className="minus">
                    // {transaction.text} <span>-$400</span><button className="delete-btn">x</button>
                    // </li>
