import React, { useEffect, useState } from "react";

export default function ContentNewsOne(props) {

    let newsElem = props.newsElem;

    return (
        <div className="content__news-one">

            <a href={newsElem[0]['url']} className="content__news-one-elem">
                <div className="content__news-one-elem-img">
                    {newsElem[0]['urlToImage'] != null
                        ? <object data={newsElem[0]['urlToImage']}>
                            <p>ActualNews</p>
                        </object>
                        : <p>ActualNews</p>}
                </div>
                <div className="content__news-one-elem-gragient"></div>
                <div className="content__news-one-elem-text">
                    <div className="content__news-one-elem-title">
                        <p>{newsElem[0]['title']}</p>
                    </div>
                    <div className="content__news-one-elem-more">
                        <div className="content__news-one-elem-date">
                            <p>{newsElem[0]['publishedAt'].slice(0, 10)}</p>
                        </div>
                        <div className="content__news-one-elem-author">
                            <p>{newsElem[0]['author'] != null&&newsElem[0]['author'] != ""
                                ? newsElem[0]['author']
                                : ''}</p>
                        </div>
                    </div>
                </div>

            </a>
            <a href={newsElem[1]['url']} className="content__news-one-elem">
                <div className="content__news-one-elem-img">
                    {newsElem[1]['urlToImage'] != null
                        ? <object data={newsElem[1]['urlToImage']}>
                            <p>ActualNews</p>
                        </object>
                        : <p>ActualNews</p>}
                </div>
                <div className="content__news-one-elem-gragient"></div>
                <div className="content__news-one-elem-text">
                    <div className="content__news-one-elem-title">
                        <p>{newsElem[1]['title']}</p>
                    </div>
                    <div className="content__news-one-elem-more">
                        <div className="content__news-one-elem-date">
                            <p>{newsElem[1]['publishedAt'].slice(0, 10)}</p>
                        </div>
                        <div className="content__news-one-elem-author">
                            <p>{newsElem[1]['author'] != null&&newsElem[1]['author'] != ""
                                ? newsElem[1]['author']
                                : ''}</p>
                        </div>
                    </div>
                </div>

            </a>

        </div>
    )
}