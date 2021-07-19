import React, { useState, useEffect } from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, XAxis, YAxis} from 'react-vis';
import { tellorPriceFeed } from '../helpers/smartContract.js'
import '../style/HistoricalFeed.css'

function HistoricalFeed(props) {

  const granularity = 1000000; // For use in checking the value

  // Set state variables
  const [isLoading, setLoading] = useState(true);
  const [priceData, setPriceData] = useState([]);

  useEffect(() => {
    if (isLoading === true) {
        var allPrices = []
        var oldtimestamp = 0
        tellorPriceFeed.methods.getCurrentValue(props.idNum).call()
        .then((roundData) => {
            oldtimestamp = roundData[2]
            allPrices.push({
              x: allPrices.length + 1,
              y: roundData[1] / granularity,
              timestamp: roundData[2]
            })
            console.log(allPrices)
            //for (var i = 2; i < 20; i++) {
            tellorPriceFeed.methods.getDataBefore(props.idNum, oldtimestamp).call()
            .then((nestedRoundData) => {
              oldtimestamp = nestedRoundData[2]
              allPrices.push({
                x: allPrices.length + 1,
                y: nestedRoundData[1] / granularity,
                timestamp: nestedRoundData[2]
              })
              tellorPriceFeed.methods.getDataBefore(props.idNum, oldtimestamp).call()
              .then((anotherNestedData) => {
                oldtimestamp = anotherNestedData[2]
                allPrices.push({
                  x: allPrices.length + 1,
                  y: anotherNestedData[1] / granularity,
                  timestamp: anotherNestedData[2]
                })
                tellorPriceFeed.methods.getDataBefore(props.idNum, oldtimestamp).call()
              .then((lastNestedData) => {
                oldtimestamp = lastNestedData[2]
                allPrices.push({
                  x: allPrices.length + 1,
                  y: lastNestedData[1] / granularity,
                  timestamp: lastNestedData[2]
                })
                tellorPriceFeed.methods.getDataBefore(props.idNum, oldtimestamp).call()
              .then((lastNestedData) => {
                oldtimestamp = lastNestedData[2]
                allPrices.push({
                  x: allPrices.length + 1,
                  y: lastNestedData[1] / granularity,
                  timestamp: lastNestedData[2]
                })
                setPriceData(allPrices.reverse())
            setLoading(false)
              })
              })
              })
            })
            //}
        });
    }
});
  return (
    <>
      <p className="descriptor">historical price feed</p>
      <XYPlot height={350} width={500}>
        <XAxis />
        <YAxis />
        <LineSeries data={priceData} />
      </XYPlot>
    </>
  );
}

export default HistoricalFeed;