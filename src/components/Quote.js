import React from "react";
import "./Quote.css";

const Quote = props => {
    return (
        <React.Fragment>
            <h2 className="customQuote">{props.quote}</h2>
        </React.Fragment>
    )
};

export default Quote;

