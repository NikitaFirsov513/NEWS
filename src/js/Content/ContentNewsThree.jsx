import React, { useEffect, useState } from "react";

export default function ContentNewsThree(props) {
    let newsElem = props.newsElem;


    return (
        <div className="content__news-three">
            <a href={newsElem[0]['url']} className="content__news-three-element">
                <div className="content__news-three-image">
                    {newsElem[0]['urlToImage'] != null
                        ? <img src={newsElem[0]['urlToImage']} alt="asd" />
                        : <p>ActualNews</p>}
                </div>
                <div className="content__news-three-title">
                    <p>{newsElem[0]['title'].length<70
                    ?newsElem[0]['title']
                    :newsElem[0]['title'].substr(0, 70)+'...'}
                    </p>
                </div>
                <div className="content__news-three-more">
                    <div className="content__news-one-elem-date">
                        <p>{newsElem[0]['publishedAt'].slice(0, 10)}</p>
                    </div>
                    <div className="content__news-one-elem-author">
                        <p>{newsElem[0]['author'] != null
                            ? ''
                            : ''}</p>
                    </div>
                </div>
            </a>
            <a href={newsElem[1]['url']} className="content__news-three-element">
                <div className="content__news-three-image">
                    {newsElem[1]['urlToImage'] != null
                        ? <img src={newsElem[1]['urlToImage']} alt="asd" />
                        : <p>ActualNews</p>}
                </div>
                <div className="content__news-three-title">
                <p>{newsElem[1]['title'].length<70
                    ?newsElem[1]['title']
                    :newsElem[1]['title'].substr(0, 70)+'...'}
                    </p>
                </div>
                <div className="content__news-three-more">
                    <div className="content__news-one-elem-date">
                        <p>{newsElem[1]['publishedAt'].slice(0, 10)}</p>
                    </div>
                    <div className="content__news-one-elem-author">
                        <p>{newsElem[1]['author'] != null
                            ? ''
                            : ''}</p>
                    </div>
                </div>
            </a>

            <a href={newsElem[2]['url']} className="content__news-three-element">
                <div className="content__news-three-image">
                    {newsElem[2]['urlToImage'] != null
                        ? <img src={newsElem[2]['urlToImage']} alt="asd" />
                        : <p>ActualNews</p>}
                </div>
                <div className="content__news-three-title">
                <p>{newsElem[2]['title'].length<70
                    ?newsElem[2]['title']
                    :newsElem[2]['title'].substr(0, 70)+'...'}
                    </p>
                </div>
                <div className="content__news-three-more">
                    <div className="content__news-one-elem-date">
                        <p>{newsElem[2]['publishedAt'].slice(0, 10)}</p>
                    </div>
                    <div className="content__news-one-elem-author">
                        <p>{newsElem[2]['author'] != null
                            ? ''
                            : ''}</p>
                    </div>
                </div>
            </a>
        </div>
    )
}