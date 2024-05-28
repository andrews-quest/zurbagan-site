import React from "react"
import  ReactDOM from "react-dom/client"
import {Header} from "./Header"
import {PostsDisplay} from "./PostsDisplay"
import {Footer} from "./Footer"
import "./App.css"

export default function App() {
    return <>
    <Header textHeader={"ЗУРБАГАН"} />
    <PostsDisplay />
    <Footer />
    </>
}

const domContainer = document.getElementById("root")!;
const root = ReactDOM.createRoot(domContainer);
root.render(<App />)