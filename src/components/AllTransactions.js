import Web3 from 'web3';
import React, { useState, useEffect } from 'react';
import { tellorPriceFeed } from '../helpers/smartContract.js'
import ReportIcon from '../icons/reportIcon.js';
import '../style/AllTransactions.css'

function AllTransactions() {

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
                //fromBlock: latestBlock - 500, -- when updated
                //toBlock: latestBlock -- when updated
                fromBlock: 16923393 - 200,
                toBlock: 16923393
            }, function(error, events){
                numEvents = events.length;
                })
            .then(function(events){
                var newTransactions = []
                for (let i = 0; i < numEvents; i++) {
                    newTransactions.push({
                        reporter: events[i]['returnValues']['_reporter'],
                        time: Date(events[i]['returnValues']['_time']),
                        requestId: events[i]['returnValues']['_requestId'],
                        value: (events[i]['returnValues']['_value']) / granularity
                    })
                }
                setTransactions(newTransactions)
                setLoading(false)
            });
        });
        }
    });
    return (
        <>
            <div className="miner-values">
                <ul id="feeds" className="list-group">
                {transactions.slice(0, 10).map((transaction, key) => (
                    <li key={key} class="list-group-item">
                        <div className="row">
                            <div className="col-1 icon-col">
                                <span className="report-icon">
                                    <ReportIcon />
                                </span>
                            </div>
                            <div id={"content-" + key} className="col-10 content-col">
                                <p class="id-header"><b>ID: {transaction['requestId']} |</b></p>
                                <p class="reporter-description"><a class="scan-link" href={"https://polygonscan.com/address/" + transaction['reporter']}>{transaction['reporter'].substring(0, 10) + "..."}</a> submitted {transaction['value']} USD </p> 
                            </div>
                        </div>
                    </li>
                ))}
                </ul>
            </div>
        </>
    )
}

export default AllTransactions;