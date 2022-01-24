import React, { useEffect, useState } from "react";
import ContentNewsOne from "./ContentNewsOne.jsx";
import ContentNewsTwo from "./ContentNewsTwo.jsx";
import ContentNewsThree from "./ContentNewsThree.jsx";


export default function Content(props) {

    let newsList = props.newsList;
    //console.log(newsList)

    let News = SetNews();

    function SetNews() {
        let news = [];
        let i = 0;
        while (i <= newsList.articles.length - 1) {
            let loop2 = false;
            if (i < newsList.articles.length - 5) {
                loop2 = Math.floor(Math.random() * 5) + 1;
                //console.log("FIRSTLOOP>", loop2)
                if (loop2 == 4 || loop2 == 1) {
                    loop2++
                }
            }
            if (i < newsList.articles.length - 3 && !loop2) {
                loop2 = Math.floor(Math.random() * 3) + 1;
                if (loop2 == 1) {
                    loop2++
                }
            }
            if (i < newsList.articles.length - 2 && !loop2) {
                loop2 = Math.floor(Math.random() * 3) + 1;
                if (loop2 == 1) {
                    loop2++
                }
            }

            if (loop2) {
                let newsElem = [];
                for (let j = 0; j <= loop2 - 1; j++) {
                    newsElem.push(newsList.articles[i])
                    i++;
                }
                if (loop2 == 2) {
                    news.push(<ContentNewsOne key={loop2 * i * newsElem.length+1} newsElem={newsElem} />)
                }
                if (loop2 == 5) {
                    news.push(<ContentNewsTwo key={loop2 * i* newsElem.length+2} newsElem={newsElem} />)
                }
                if (loop2 == 3) {
                    news.push(<ContentNewsThree key={loop2 * i* newsElem.length +3} newsElem={newsElem} />)
                }
            }
            else {
                i++
            }
        }
       
        return news
    }

    return (

        <section className="content">

            <div className="content__container">
                {News}
            </div>
        </section>

    )
}