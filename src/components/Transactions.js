import React, { useState, useEffect } from 'react';
import { tellorPriceFeed } from '../helpers/smartContract.js'

function Transactions() {

    const granularity = 1000000; // For use in checking the value

    // State variables
    const [isLoading, setLoading] = useState(true);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        if (isLoading === true) {
            var numEvents = 0;
            tellorPriceFeed.getPastEvents('allEvents', {
                fromBlock: 16138467,
                toBlock: 16138480
            }, function(error, events){
                numEvents = events.length;
                })
            .then(function(events){
                var newTransactions = []
                for (let i = 0; i < numEvents; i++) {
                    if (events[i]['returnValues']['_requestId'] === "1") {
                        newTransactions.push({
                            reporter: events[i]['returnValues']['_reporter'],
                            time: Date(events[i]['returnValues']['_time']),
                            requestId: events[i]['returnValues']['_requestId'],
                            value: (events[i]['returnValues']['_value']) / granularity
                        })
                    }
                }
                setTransactions(newTransactions)
                setLoading(false)
            });
        }
    });
    return (
        <>
            <ul className="list-group">
                {transactions.map((transaction) => (
                    <li className="list-group-item">
                        <p>ID: {transaction['requestId']}</p>
                        <p>Value: {transaction['value']}</p>
                        <p>Reporter: {transaction['reporter']}</p>
                        <p>Time Reported: {transaction['time']}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Transactions;