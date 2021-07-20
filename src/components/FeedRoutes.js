import feeds from '../helpers/feeds.js';
import CoinIcon from '../icons/coinIcon';
import { Link } from "react-router-dom";
import '../style/Home.css';

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

export default feedRoutes;