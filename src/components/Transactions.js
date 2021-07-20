import Web3 from 'web3';
import React, { useState, useEffect } from 'react';
import { tellorPriceFeed } from '../helpers/smartContract.js'
import ReportIcon from '../icons/reportIcon.js';
import '../style/Transactions.css';

function Transactions(props) {

    const granularity = 1000000; // For use in checking the value

    // State variables
    const [isLoading, setLoading] = useState(true);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        if (isLoading === true) {
            var numEvents = 0;
            const web3 = new Web3("https://polygon-mainnet.infura.io/v3/5186860ac32a42758846a4735922ec46");
            web3.eth.getBlockNumber().then(function(value) {
                const latestBlock = value;
                tellorPriceFeed.getPastEvents('NewValueSubmitted', {
                    // fromBlock: latestBlock - 200,
                    // toBlock: latestBlock
                    fromBlock: 16923393 - 100,
                    toBlock: 16923393
                }, function(error, events){
                    numEvents = events.length;
                    })
                .then(function(events){
                    var newTransactions = []
                    for (let i = 0; i < numEvents; i++) {
                        if (events[i]['returnValues']['_requestId'] === props.idNum.toString() || props.idNum.toString() === "-1") {
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
            });
        }
    });
    return (
        <>
            <p>latest update miner values</p>
            <div className="miner-values">
                {transactions.slice(0, 4).map((transaction, key) => (
                    <div key={key} className="container">
                        <br />
                        <div className="col">
                            <h4>
                                <span className="report-icon"> <ReportIcon /> </span>
                                <a href={"https://polygonscan.com/address/" + transaction['reporter']}>{transaction['reporter']}</a> submitted {transaction['value']} USD
                            </h4>
                            <p>time updated: {transaction['time']}</p>
                            <hr />
                        </div>
                    </div>
                ))}
                <br />
                <p>all transactions</p>
                <table className="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">Value (in USD)</th>
                        <th scope="col">Reporter Address</th>
                        <th scope="col">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.slice(4, transactions.length - 1).map((transaction, key) => (
                            <tr>
                                <th scope="row">{transaction['value']}</th>
                                <td><a href={"https://polygonscan.com/address/" + transaction['reporter']}>{transaction['reporter']}</a></td>
                                <td>{transaction['time']}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Transactions;