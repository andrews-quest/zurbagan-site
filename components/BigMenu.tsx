import React from "react"
import "./BigMenu.css"

import payIconGreen from "../resources/images/payment_green.png"
import payIconWhite from "../resources/images/payment_white.png"

export const BigMenu : React.FC <{

}> = ({
    
}) => {
    return (
            <div id="buttons">
                    <a><div id="button">
                        <img></img>
                        <h2>ПІДКЛЮЧИТИСЯ</h2></div></a>
                    <a><div id="button">
                            <div>
                                <img src={payIconWhite} id="white"></img>
                                <img src={payIconGreen} id="green"></img>
                            </div>
                            <h2>СПЛАТИТИ</h2>
                        </div></a>
                    <a><div id="button"><h2>CЛУЖБА ПІДТРИМКИ</h2></div></a>
                    <a><div id="button" ><h2>ПРО НАC</h2></div></a>
                </div>
    )
}

                