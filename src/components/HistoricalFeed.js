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
              x: roundData[2],
              y: roundData[1] / granularity
            })
            for (let i = 2; i < 4; i++) {
              tellorPriceFeed.methods.getDataBefore(props.idNum, oldtimestamp).call()
              .then((nestedRoundData) => {
                oldtimestamp = nestedRoundData[2]
                allPrices.push({
                  x: roundData[2],
                  y: nestedRoundData[1] / granularity,
                })
              })
            }
            setPriceData(allPrices.reverse());
            setLoading(false)
        });
    }
});
  const data = [
    {x: 0, y: 8},
    {x: 1, y: 5},
    {x: 2, y: 4},
    {x: 3, y: 9},
    {x: 4, y: 1},
    {x: 5, y: 7},
    {x: 6, y: 6},
    {x: 7, y: 3},
    {x: 8, y: 2},
    {x: 9, y: 0}
  ];
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