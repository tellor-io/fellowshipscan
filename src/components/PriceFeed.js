import Transactions from './Transactions.js';
import CurrentInfo from './CurrentInfo.js';
import HistoricalFeed from './HistoricalFeed.js';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import '../style/Main.css'
import feeds from '../helpers/feeds.js';

function PriceFeed(props) {
  console.log(feeds[props.idNum - 1])
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{ `ID ${ props.idNum } | Fellowship Scan` }</title>
    </Helmet>
    <div className="container">
      <br />
      <Link to="/"><button type="button" id="back" className="btn btn-dark">
        ← back to home</button></Link>
      <br />
      <br />
      <br />
      <div className="card">
        <div className="card-body">
            <h1 class="id-name">{feeds[props.idNum - 1]['name']}  <span className="id-number">ID: {props.idNum}</span> </h1>
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
