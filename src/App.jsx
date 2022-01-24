import React, { useEffect, useState } from "react";
import Header from "./js/Header.jsx";
import Content from "./js/Content/Content.jsx";
import Api from "./js/Api.js";
import Loader from "./js/Loader.jsx";

export default function App() {
    let [newsList, setNewsList] = useState(false);

    useEffect(async () => {
        async function fetchData() {
            const resolve = await Api.getActualNewsRu("general");
            newsList = resolve;
            setNewsList(newsList)
        }
        await fetchData()
    }, [])

    return (
        <div>
            <Header setNewsList={setNewsList} />
            {newsList
                ?<Content newsList={newsList} />
                :<Loader/>
            }
        </div>
    )
}