import React, { useState, useEffect } from 'react';
import { tellorPriceFeed } from '../helpers/smartContract.js'
import '../style/CurrentInfo.css'

function CurrentInfo(props) {
    console.log("Here!")
    console.log(props.idNum)
    const granularity = 1000000; // For use in checking the value

    // State variables
    const [isLoading, setLoading] = useState(true);
    const [price, setPrice] = useState(0);
    const [timestamp, setTimestamp] = useState(Date());

    useEffect(() => {
        if (isLoading === true) {
            tellorPriceFeed.methods.getCurrentValue(props.idNum).call()
            .then((roundData) => {
                setPrice(roundData[1] / granularity)
                setTimestamp(Date(roundData[2]))
                setLoading(false)
            });
        }
    });
    return (
        <>
            <p className="descriptor">latest confirmed value</p>
            <h3 id="price-tag">{price} USD</h3>
            <p className="descriptor">latest update</p>
            <h3 id="date-tag">{timestamp}</h3>
        </>
    )
}

export default CurrentInfo;