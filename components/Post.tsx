import React from "react";
import "./Post.css";

export const Post: React.FC <{
    text : string
}> = ({
    text
}) => {

    return (
        <div id="post">
            <p>
                {text}
            </p>
        </div>
    )
}