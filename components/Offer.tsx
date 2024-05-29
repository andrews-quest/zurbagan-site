import React from "react";
import "./OffersDisplay.css"

export const Offer: React.FC <{
    offer_name: string,
    offer_info: Array<string>
}> = ({
    offer_name,
    offer_info
}) => {
    return (
        <div id="offer">
            <div id="offer_header">
                <h3>{offer_name}</h3>
            </div>
            <div id="offer_info">
                <ul>
                {offer_info.map(
                (info_bit) => {
                    return <li>{info_bit}</li>
                }
                )}
                </ul>
            </div>
            <div id="offer_footer">
                <div id="offer_button">Підключити зараз</div>
            </div>
        </div>
    )
}