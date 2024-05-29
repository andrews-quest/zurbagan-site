import React from "react"
import "./BigMenu.css"

import connIcon from "../resources/images/connect_icon.png"
import payIcon from "../resources/images/payment_white.png"
import suppIcon from "../resources/images/support_white.png"
import infoIcon from "../resources/images/info_icon.png"


export const BigMenu : React.FC <{

}> = ({
    
}) => {
    return (
            <div id="buttons">
                    <a><div id="button">
                        <img src={connIcon}></img>
                        <h2>ПІДКЛЮЧИТИСЯ</h2></div></a>
                    <a><div id="button">
                            <img src={payIcon}></img>
                            <h2>СПЛАТИТИ</h2>
                        </div></a>
                    <a><div id="button">
                        <img src={suppIcon}></img>
                        <h2>CЛУЖБА ПІДТРИМКИ</h2></div></a>
                    <a><div id="button" >
                        <img src={infoIcon}></img>
                        <h2>ПРО НАC</h2></div></a>
                </div>
    )
}

                