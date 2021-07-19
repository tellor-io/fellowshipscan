import React, { useState, useEffect } from 'react';
import { tellorPriceFeed } from '../helpers/smartContract.js'
import '../style/AllTransactions.css'

function AllReporters() {

    // State variables
    const [isLoading, setLoading] = useState(true);
    const [reporters, setReporters] = useState([]);

    useEffect(() => {
        if (isLoading === true) {
            var numReporters = 0;
            tellorPriceFeed.methods.numberOfReporters().call().then(function(value) {
                numReporters = parseInt(value);
                var tempReporters = []
                for (var i = 1; i <= numReporters; i++) {
                    tellorPriceFeed.methods.reporters(i).call().then(function(value) {
                        tempReporters.push({
                            number: tempReporters.length + 1,
                            reporter: value
                        })
                        if (tempReporters.length === numReporters) {
                            setReporters(tempReporters)
                        }
                    })
                    setLoading(false);
                }
            })
        }
    });
    return (
        <>
            <div className="miner-values">
                <ul id="reporters" className="list-group">
                    {reporters.map((reporter) => 
                        <li key={reporter.number}>{reporter.reporter}</li>
                    )}
                </ul>
            </div>
        </>
    )                 
}

export default AllReporters;