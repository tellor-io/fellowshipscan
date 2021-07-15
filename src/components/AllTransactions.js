import Web3 from 'web3';
import React, { useState, useEffect } from 'react';
import { tellorPriceFeed } from '../helpers/smartContract.js'
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
                fromBlock: latestBlock - 500,
                toBlock: latestBlock
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
            <p>latest update miner values</p>
            <div className="miner-values">
                {transactions.slice(0, 10).map((transaction, key) => (
                    <>
                    <div key={key} className="container transaction-con">
                        <div className="row">
                            <div className="col-1 icon-col">
                                <span> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 37.382 33.379"><g id="Group_91" data-name="Group 91" transform="translate(-80.81 0)"><path id="Path_73" data-name="Path 73" d="M321.138,284.533l-6.03-11.728a5,5,0,0,0-4.055-2.47h-.016l-16.714.082a4.963,4.963,0,0,0-4.035,2.518l-5.815,11.733a3.96,3.96,0,0,0,.853,4.448l15.371,13.8a3.275,3.275,0,0,0,4.293-.012l15.343-13.929A3.918,3.918,0,0,0,321.138,284.533Zm-1.266,3.937L304.53,302.4a2.576,2.576,0,0,1-3.375.009l-15.371-13.8a3.283,3.283,0,0,1-.7-3.634l5.815-11.733a4.278,4.278,0,0,1,3.425-2.137l16.715-.082h.013a4.31,4.31,0,0,1,3.446,2.1l6.03,11.728A3.239,3.239,0,0,1,319.872,288.469Z" transform="translate(-203.315 -270.334)" fill="#71eb9a"></path><g id="Group_88" data-name="Group 88" transform="translate(93.017 11.001)"><path id="Path_42" data-name="Path 42" d="M308.246,296.873l-4.7-4.7a.89.89,0,0,1,1.258-1.259l3.44,3.44,6.491-6.491A.89.89,0,0,1,316,289.123Z" transform="translate(-303.288 -287.604)" fill="#71eb9a"></path></g></g></svg> </span>
                            </div>
                            <div id={"content-" + key} className="col-10 content-col">
                                <p class="id-header"><b>ID {transaction['requestId']} |</b></p>
                                <p class="reporter-description"><a class="scan-link" href={"https://polygonscan.com/address/" + transaction['reporter']}>{transaction['reporter'].substring(0, 10) + "..."}</a> submitted {transaction['value']} USD </p> 
                            </div>
                        </div>
                    </div>
                    <br />
                    </>
                ))}
            </div>
        </>
    )
}

export default AllTransactions;

/*

<div className="col">
                            <h4>
                                <span> <svg xmlns="http://www.w3.org/2000/svg" width="37.382" height="33.379" viewBox="0 0 37.382 33.379"><g id="Group_91" data-name="Group 91" transform="translate(-80.81 0)"><path id="Path_73" data-name="Path 73" d="M321.138,284.533l-6.03-11.728a5,5,0,0,0-4.055-2.47h-.016l-16.714.082a4.963,4.963,0,0,0-4.035,2.518l-5.815,11.733a3.96,3.96,0,0,0,.853,4.448l15.371,13.8a3.275,3.275,0,0,0,4.293-.012l15.343-13.929A3.918,3.918,0,0,0,321.138,284.533Zm-1.266,3.937L304.53,302.4a2.576,2.576,0,0,1-3.375.009l-15.371-13.8a3.283,3.283,0,0,1-.7-3.634l5.815-11.733a4.278,4.278,0,0,1,3.425-2.137l16.715-.082h.013a4.31,4.31,0,0,1,3.446,2.1l6.03,11.728A3.239,3.239,0,0,1,319.872,288.469Z" transform="translate(-203.315 -270.334)" fill="#71eb9a"></path><g id="Group_88" data-name="Group 88" transform="translate(93.017 11.001)"><path id="Path_42" data-name="Path 42" d="M308.246,296.873l-4.7-4.7a.89.89,0,0,1,1.258-1.259l3.44,3.44,6.491-6.491A.89.89,0,0,1,316,289.123Z" transform="translate(-303.288 -287.604)" fill="#71eb9a"></path></g></g></svg> </span>
                                <a href={"https://polygonscan.com/address/" + transaction['reporter']}>{transaction['reporter']}</a> submitted {transaction['value']} USD
                            </h4>
                            <p><b>ID {transaction['requestId']}</b> | time updated: {transaction['time']}</p>
                            <hr />
                        </div>

                        */