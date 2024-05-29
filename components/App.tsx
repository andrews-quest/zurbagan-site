import React from "react"
import  ReactDOM from "react-dom/client"
import {Navbar} from "./Navbar"
import {Header} from "./Header"
import {BigMenu} from "./BigMenu"
import {PostsDisplay} from "./PostsDisplay"
import {AdBanner} from "./AdBanner"
import {Footer} from "./Footer"
import "./App.css"
import adBannerSrc from "../resources/images/ad_banner.jpg"

export default function App() {
    return <>
    <Navbar />
    <Header textHeader={"ЗУРБАГАН"} 
        textRightBanner={["067 300 22 00", "066 300 22 00", "073 200 22 00", "info@zurbagan.tv"]} />
    <BigMenu />
    <main>
        <PostsDisplay />
        <AdBanner ad_banner_src={adBannerSrc}/>
        <Footer />
        <div id="main_gradient"></div>
    </main>
    </>
}

const domContainer = document.getElementById("root")!;
const root = ReactDOM.createRoot(domContainer);
root.render(<App />)