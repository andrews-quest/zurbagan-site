import React from "react"
import  ReactDOM from "react-dom/client"
import {Navbar} from "./Navbar"
import {Header} from "./Header"
import {BigMenu} from "./BigMenu"
import {PostsDisplay} from "./PostsDisplay"
import {Footer} from "./Footer"
import "./App.css"

export default function App() {
    return <>
    <Navbar />
    <Header textHeader={"ЗУРБАГАН"} 
        textRightBanner={["067 300 22 00", "066 300 22 00", "073 200 22 00", "info@zurbagan.tv"]} />
    <BigMenu />
    <main>
        <PostsDisplay />
        <Footer />
        <div id="main_gradient"></div>
    </main>
    </>
}

const domContainer = document.getElementById("root")!;
const root = ReactDOM.createRoot(domContainer);
root.render(<App />)