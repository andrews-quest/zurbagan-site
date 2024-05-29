import React from "react";
import "./Post.css";

export const Post: React.FC <{
    heading : string,
    text : string,
    date : string
}> = ({
    heading,
    text,
    date
}) => {

    return (
        <div id="post">
            <h3>
                {heading}
            </h3>
            <p>
                {text}
            </p>
            <p id="date">
                {date}
            </p>
        </div>
    )
}