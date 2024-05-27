import React from "react"
import  ReactDOM from "react-dom/client"

export default function App() {
    return <h1>Hello World!</h1>
}

const domContainer = document.getElementById("root")!;
const root = ReactDOM.createRoot(domContainer);
root.render(<App />)