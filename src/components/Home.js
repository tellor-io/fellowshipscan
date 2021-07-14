import feeds from '../helpers/feeds.js';
import AllTransactions from '../components/AllTransactions.js';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Used to link to each price feed individually
const feedRoutes = feeds.map((feed) =>
    <li key={feed.id} className="list-group-item">
        <p><b>ID: {feed.id}</b></p>
        <h4> <Link to={"/feeds/" + feed.id}>{feed.name}</Link> </h4>
    </li>
)

function Home() {
    return(
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Home | Fellowship Scan</title>
        </Helmet>
        <h1>Track Tellor's Fellowship and Mesosphere Smart Contracts</h1>
        <p>get data values, look at reporter history, and more</p>
        <br />
        <div className="row">
            <div className="col">
                <h3>Price Feeds</h3>
                <p>stay up to date on all of the price feeds Tellor provides oracle services for</p>
                <ul className="list-group">
                    {feedRoutes}
                </ul>
            </div>
            <div className="col">
                <h3>Latest reporter history</h3>
                <AllTransactions />
            </div>
        </div>
        </>
    );
}

export default Home;