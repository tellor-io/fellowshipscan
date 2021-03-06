import React from 'react';
import { Helmet } from "react-helmet";
import Transactions from './Transactions.js';

function ReportsPage() {
    return(
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Reports | Fellowship Scan</title>
            </Helmet>
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/reports">Reports</a></li>
                        <li class="breadcrumb-item active" aria-current="page">All</li>
                    </ol>
                </nav>
                <div className="card">
                    <h1>Report History</h1>
                    <p>history of all values for all data ids provided on-chain from the reporters</p>
                    <hr />
                    <Transactions idNum="-1" />
                </div>
            </div>
        </>
    )
}

export default ReportsPage;