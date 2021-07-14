import Transactions from './Transactions.js';
import CurrentInfo from './CurrentInfo.js';
import HistoricalFeed from './HistoricalFeed.js';
import '../style/Main.css'
import { Link } from "react-router-dom";

function PriceFeed(props) {
  return (
    <>
    <div className="container">
      <br />
      <Link to="/"><button type="button" id="back" className="btn btn-dark">
        ← back to home</button></Link>
      <br />
      <br />
      <br />
      <div className="card">
        <div className="card-body">
            <h1 class="id-name">ETH/USD  <span className="id-number">ID: 2</span> </h1>
            <div className="row">
              <div className="col">
                <br />
                <CurrentInfo idNum={props.idNum}/>
                <br />
              </div>
              <div className="col">
                <br />
                <HistoricalFeed idNum={props.idNum}/>
              </div>
            </div>
            <br />
            <div className="row">
              <br />
              <Transactions idNum={props.idNum}/>
            </div>
          </div>
      </div>
    </div>
    </>
  );
}

export default PriceFeed;
