import React from 'react';
import { Link } from 'react-router-dom';

function Buy(props) {
    return (
        <div style={{ textAlign: "center", paddingTop: "20px" }}>
            <h1>Buy Successful !!!</h1>
            <Link to="/" style={{ textDecoration: "none" }}>
                <button className="btn btn-next">Back to products</button>
            </Link>
        </div>
    );
}

export default Buy;