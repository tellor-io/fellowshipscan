import Transactions from './Transactions.js';
import CurrentInfo from './CurrentInfo.js';
import HistoricalFeed from './HistoricalFeed.js';
import { Helmet } from "react-helmet";
import '../style/Main.css'
import feeds from '../helpers/feeds.js';

function PriceFeed(props) {
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{ `ID ${ props.idNum } | Fellowship Scan` }</title>
    </Helmet>
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/feeds">Feeds</a></li>
            <li class="breadcrumb-item active" aria-current="page">ID {props.idNum}</li>
        </ol>
      </nav>
      <div className="card">
        <div className="card-body">
            <h1 className="id-name">{feeds[props.idNum - 1]['name']}  <span className="id-number">ID: {props.idNum}</span> </h1>
            <div className="row">
              <div className="col">
                <br />
                <CurrentInfo idNum={props.idNum}/>
                <br />
              </div>
              <div className="col">
                <br />
                <p>historical price feed</p>
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
