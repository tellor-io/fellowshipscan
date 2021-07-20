import React from 'react';
import feedRoutes from './FeedRoutes.js';
import { Helmet } from "react-helmet";

function FeedsPage() {
    return(
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Price Feeds | Fellowship Scan</title>
            </Helmet>
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/feeds/all">Feeds</a></li>
                        <li class="breadcrumb-item active" aria-current="page">All</li>
                    </ol>
                </nav>
                <div className="card">
                    <h1>Price Feeds</h1>
                    <p>check out all of the provided data ids from tellor</p>
                    <hr />
                    {feedRoutes}
                </div>
            </div>
        </>
    )
}

export default FeedsPage;