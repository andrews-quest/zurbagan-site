import React from "react";
import "./OfficeDisplay.css";
import officeView from "../resources/images/office_view.png"

export const OfficeDiplay: React.FC <{

}> = ({

}) => {
    return (
        <div id="office_display">
            <div id="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1249.0119621522133!2d33.20157684232889!3d51.237054273254664!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe27b7bbdc854bd82!2z0KLQktCkICLQl9GD0YDQsdCw0LPQsNC9Ig!5e0!3m2!1suk!2sua!4v1487581692979" allowfullscreen="allowfullscreen"></iframe>
            </div>
            <div id="office_view">
                <img src={officeView}></img>
            </div>
            <div id="schedule">
                <p>
                    Графік роботи: <br/>
                    Пн. - Пт. з 9-00 до 18-00 <br/>
                    перерва з 13-00 до 14-00 <br/>
                    Сб. - Нд. Вихідні 
                </p>
            </div>
        </div>
    )
}