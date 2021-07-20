import React, { useState, useEffect } from 'react';
import { tellorPriceFeed } from '../helpers/smartContract.js';
import '../style/AllReporters.css';
import FlagReporterIcon from '../icons/flagReporterIcon.js';

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
                        <div key={reporter.number}> 
                            <li class="list-group-item">
                                <div className="row">
                                    <div className="col-10">
                                        <h5 class="reporter-title">Reporter {reporter.number}</h5>
                                        <a class="reporter-address" href={"https://polygonscan.com/address/" + reporter.reporter}>{reporter.reporter.substring(0, 30) + "..."}</a>
                                    </div>
                                    <div className="col-2">
                                        <div className="icon-wrapper">
                                            <span className="report-icon"> <FlagReporterIcon /> </span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>
                    )}
                </ul>
            </div>
        </>
    )                 
}

export default AllReporters;