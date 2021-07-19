import feeds from '../helpers/feeds.js';
import AllTransactions from '../components/AllTransactions.js';
import AllReporters from '../components/AllReporters.js'
import CoinIcon from '../icons/coinIcon';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import '../style/Home.css';

// Used to link to each price feed individually
const feedRoutes = feeds.map((feed) =>
    <li key={feed.id} className="list-group-item">
        <p class="coin-id">
            <span class="coin-icon">
                <CoinIcon />
            </span>
            <b>&nbsp;ID: {feed.id}</b>
            <br />
            <Link class="coin-name" to={"/feeds/" + feed.id}>{feed.name}</Link>
        </p>
    </li>
)

function Home() {
    return(
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Home | Fellowship Scan</title>
        </Helmet>
        <h1>Fellowship Scan</h1>
        <p>get data values, look at reporter history, and more</p>
        <br />
        <div className="row">
            <div className="col-6">
                Chris Pondoc
            </div>
            <div className="col-6">
                <div class="card">
                    <div class="card-body">
                        <h3>Reporters</h3>
                        <p>activities from all addresses from the fellowship</p>
                        <AllReporters />
                    </div>
                </div>
            </div>
        </div>
        <br />
        <br />
        <div className="row">
            <div className="col-6">
                <div class="card">
                        <div class="card-body">
                            <h3>Price Feeds</h3>
                            <p>stay up to date on all of the price feeds Tellor provides oracle services for</p>
                            <ul id="feeds" className="list-group">
                                {feedRoutes}
                            </ul>
                        </div>
                    </div>
            </div>
            <div className="col-6">
                <div class="card">
                    <div class="card-body">
                        <h3>Latest reporter history</h3>
                        <p>latest update miner values</p>
                        <AllTransactions />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Home;