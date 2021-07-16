import feeds from '../helpers/feeds.js';
import AllTransactions from '../components/AllTransactions.js';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import '../style/Home.css';

// Used to link to each price feed individually
const feedRoutes = feeds.map((feed) =>
    <li key={feed.id} className="list-group-item">
        <p class="coin-id">
            <b>
            <span class="coin-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-coin" viewBox="0 0 16 16">
                    <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z"/>
                    <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path fill-rule="evenodd" d="M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                </svg>
            </span>
                &nbsp;ID: {feed.id}
                <br />
                <Link class="coin-name" to={"/feeds/" + feed.id}>{feed.name}</Link>
            </b>
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
            <div className="col">
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
            <div className="col">
            <div class="card">
                        <div class="card-body">
                        <h3>Latest reporter history</h3>
                <AllTransactions />
                        </div>
                    </div>
                
            </div>
        </div>
        </>
    );
}

export default Home;