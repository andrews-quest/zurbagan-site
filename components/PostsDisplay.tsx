import React from "react";
import "./PostsDisplay.css"
import {Post} from "./Post.tsx"

export const PostsDisplay: React.FC <{

}> = ({

}) => {
        let lorem: string =  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." 
    return (
    <div id="posts_display">
        <div id="header">
            <h1>НОВИНИ</h1>
        </div>
        <div id="news">
            <Post text = {lorem}/>
            <Post text = {lorem}/>
            <Post text = {lorem}/>
        </div>            
    </div>
    )
}