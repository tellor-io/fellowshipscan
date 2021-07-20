import feeds from '../helpers/feeds.js';
import AllTransactions from '../components/AllTransactions.js';
import AllReporters from '../components/AllReporters.js'
import HistoricalFeed from './HistoricalFeed.js'
import feedRoutes from './FeedRoutes.js';
import { Helmet } from "react-helmet";
import '../style/Home.css';

function Home() {

    const numFeeds = 2; // Number of reports (can be changed into a constant later on)
    const randNum = Math.floor(Math.random() * numFeeds ) + 1; // Choosing a random id

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
                <div class="card">
                    <div class="card-body">
                        <h3>Live Price Feed of {feeds[randNum - 1].name}</h3>
                        <p>price activity from a random data id</p>
                        <HistoricalFeed idNum={randNum} />
                    </div>
                </div>
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