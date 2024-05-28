import React from "react"
import  ReactDOM from "react-dom/client"
import {Navbar} from "./Navbar"
import {Header} from "./Header"
import {PostsDisplay} from "./PostsDisplay"
import {Footer} from "./Footer"
import "./App.css"

export default function App() {
    return <>
    <Navbar />
    <Header textHeader={"ЗУРБАГАН"} 
        textRightBanner={"067 300 22 00 <br> 066 300 22 00 <br> 073 200 22 00 <br> info@zurbagan.tv"} />
    <PostsDisplay />
    <Footer />
    </>
}

const domContainer = document.getElementById("root")!;
const root = ReactDOM.createRoot(domContainer);
root.render(<App />)