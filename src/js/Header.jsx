import React, { useEffect, useState, useRef } from "react";
import Api from "./Api";


export default function Header(props) {

    const nav = useRef(null);
    const input = useRef(null);

    const setNewsList = props.setNewsList;
    let activeElement = useRef('general');




    async function changeInput() {

        //console.log(input.current.value)
        if (input.current.value) {
            if (activeElement.current != null) {
                document.getElementById(activeElement.current).classList.toggle('header__nav-elem--active')
                activeElement.current = null;
            }

            const resolve = await Api.getActualNewsQ(input.current.value);
            setNewsList(resolve)
        }


    }
    function toggleNavActive() {
        nav.current.classList.toggle("header__nav--active")
    }
    function chahgeCategory(name) {
        toggleNavElementActive(name)
        toggleNavActive()
    }
    async function toggleNavElementActive(name) {

        if (name != activeElement.current) {
            //document.getElementById(activeElement.current).classList.toggle('header__nav-elem--active')
            if (activeElement.current != null) {
                document.getElementById(activeElement.current).classList.toggle('header__nav-elem--active')
            }
            if(input.current.value){
                input.current.value=""
            }
            document.getElementById(name).classList.toggle('header__nav-elem--active')
            activeElement.current = name;
            const resolve = await Api.getActualNewsRu(name);
            setNewsList(resolve)

        }

    }
    function toggleSearch() {
        document.querySelector('.header__search-input').classList.toggle('header__search-input--active')


        document.querySelector('.header__search-svg').classList.toggle('header__search-svg--active')

    }



    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <p>ActualNews</p>
                </div>
                <div onClick={toggleNavActive} className="header__list">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list"
                        viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </div>


                <div ref={nav} className="header__nav ">
                    <div onClick={toggleNavActive} className="header__nav-close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-x-lg" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                            <path fillRule="evenodd"
                                d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                        </svg>
                    </div>
                    <div id="general" className="header__nav-elem header__nav-elem--active">
                        <p onClick={e => chahgeCategory('general')}>general</p>
                    </div>
                    <div id="business" className="header__nav-elem">
                        <p onClick={e => chahgeCategory('business')}>business</p>
                    </div>
                    <div id="health" className="header__nav-elem">
                        <p onClick={e => chahgeCategory('health')}>health</p>
                    </div>
                    <div id="science" className="header__nav-elem">
                        <p onClick={e => chahgeCategory('science')}>science</p>
                    </div>
                    <div id="sports" className="header__nav-elem">
                        <p onClick={e => chahgeCategory('sports')}>sports</p>
                    </div>
                    <div id="technology" className="header__nav-elem">
                        <p onClick={e => chahgeCategory('technology')}>technology</p>
                    </div>
                </div>
                <div className="header__search">

                    <div className="header__search-input-svg">

                        <div className="header__search-input ">
                            <input onChange={e => changeInput()} ref={input} type="text" />
                        </div>
                        <div onClick={toggleSearch} className='header__search-svg '> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                        </div>
                    </div>


                </div>
            </div>
        </header>)

}