import React, { useState, useEffect } from 'react';
import { tellorPriceFeed } from '../helpers/smartContract.js'

function CurrentInfo() {

    const granularity = 1000000; // For use in checking the value

    // State variables
    const [isLoading, setLoading] = useState(true);
    const [price, setPrice] = useState(0);
    const [timestamp, setTimestamp] = useState(Date());

    useEffect(() => {
        if (isLoading === true) {
            tellorPriceFeed.methods.getCurrentValue("2").call()
            .then((roundData) => {
                setPrice(roundData[1] / granularity)
                setTimestamp(Date(roundData[2]))
                setLoading(false)
            });
        }
    });
    return (
        <div class="card">
            <div class="card-body">
                <p>ID: 2</p>
                <p>Price: {price}</p>
                <p>Time Updated: {timestamp}</p>
            </div>
        </div>
    )
}

export default CurrentInfo;