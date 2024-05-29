import React from "react";
import {Offer} from "./Offer"
import "./OffersDisplay.css"

export const OffersDisplay: React.FC <{

}> = ({

}) => {
    return (
        <div id="offers_display">
            <h2>Рекомендовані Тарифи</h2>
            <div id="offers_div">
                <Offer 
                    offer_name={"FiberNET - 50"}
                    offer_info={["Швидкість до 50Мбіт/с", "Безкоштовне підключення", "150 грн./міс."]}/>
                <Offer
                    offer_name={"FiberNET - 100"}
                    offer_info={["Швидкість до 100Мбіт/с", "Безкоштовне підключення", "200 грн./міс."]}/>
                <Offer 
                    offer_name={"ТБ - Базовий"}
                    offer_info={["90 каналів у пакеті", "Перше підключення 30 грн.", "90 грн./міс."]}/>
            </div>
        </div>
    )
}