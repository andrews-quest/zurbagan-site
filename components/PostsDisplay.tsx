import React from "react";
import "./PostsDisplay.css"
import {Post} from "./Post.tsx"

export const PostsDisplay: React.FC <{

}> = ({

}) => {
        let lorem: string =  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." 
    return (
    <div id="posts_display">
        <div id="header">
            <h1>НОВИНИ</h1>
        </div>
        <div id="news">
            <Post heading="Кешбек 3% від ПриватБанку" date="23.04.2024" text = "Шановні абоненти! Кожному платнику комуналки та телекомунікаційних послуг (інтернет, кабельне ТВ) ПриватБанк повертає 3% від суми сплачених послуг." 
            />
            <Post heading = "Актуалізація тарифних планів" date="15.02.2024" text = "Дякуємо, що Ви з нами у цей важкий для нас всіх час, ми й надалі будемо докладати всіх зусиль, щоб виправдовувати Вашу довіру та забезпечувати Вас якісним та стабільним доступом до мережі Інтернет. Звертаємо вашу увагу на зміни у тарифних планах."
            />
            <Post heading = "Національна рада України з питань телебачення і радіомовлення тимчасово призупиняють мовлення телеканалів" date="25.11.2022" text = "15 вересня Нацрада затвердила оновлений Перелік іноземних телеканалів, які можна ретранслювати в Україні. У ньому замість 185 каналів — лише 49. Згодом регулятор доповнив його ще 35 мовниками. "
            />
        </div>            
    </div>
    )
}