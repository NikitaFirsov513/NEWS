import React, { useEffect, useState } from "react";

export default function ContentNewsTwo(props) {

    let newsElem = props.newsElem;

    return (
        <div className="content__news-two">
            <div className="content__news-two-container">
                <a href={newsElem[0]['url']} className="content__news-two-bigitem">
                    <div className="content__news-two-bigitem-name">
                        <p>{newsElem[0]['title']}</p>
                    </div>
                    <div className="content__news-two-bigitem-more">
                        <div className="content__news-one-elem-date">
                            <p>{newsElem[0]['publishedAt'].slice(0, 10)}</p>
                        </div>
                        <div className="content__news-one-elem-author">
                            <p>{newsElem[0]['author'] != null
                                ? newsElem[0]['author']
                                : ''}</p>
                        </div>
                    </div>
                </a>
                <div className="content__news-two-smalllist">

                    <a href={newsElem[1]['url']} className="content__news-two-smallitem">
                        <div className="content__news-two-smallitem-name">
                            <p>{newsElem[1]['title']}</p>

                        </div>
                        <div className="content__news-two-smallitem-more">
                            <div className="content__news-one-elem-date">
                                <p>{newsElem[1]['publishedAt'].slice(0, 10)}</p>
                            </div>
                            <div className="content__news-one-elem-author">
                                <p>{newsElem[1]['author'] != null
                                    ? newsElem[1]['author']
                                    : ''}</p>
                            </div>
                        </div>
                    </a>

                    <a href={newsElem[2]['url']} className="content__news-two-smallitem">
                        <div className="content__news-two-smallitem-name">
                            <p>{newsElem[2]['title']}</p>

                        </div>
                        <div className="content__news-two-smallitem-more">
                            <div className="content__news-one-elem-date">
                                <p>{newsElem[2]['publishedAt'].slice(0, 10)}</p>
                            </div>
                            <div className="content__news-one-elem-author">
                                <p>{newsElem[2]['author'] != null
                                    ? newsElem[2]['author']
                                    : ''}</p>
                            </div>
                        </div>
                    </a>

                    <a href={newsElem[3]['url']} className="content__news-two-smallitem">
                        <div className="content__news-two-smallitem-name">
                            <p>{newsElem[3]['title']}</p>

                        </div>
                        <div className="content__news-two-smallitem-more">
                            <div className="content__news-one-elem-date">
                                <p>{newsElem[3]['publishedAt'].slice(0, 10)}</p>
                            </div>
                            <div className="content__news-one-elem-author">
                                <p>{newsElem[3]['author'] != null
                                    ? newsElem[3]['author']
                                    : ''}</p>
                            </div>
                        </div>
                    </a>

                    <a href={newsElem[4]['url']} className="content__news-two-smallitem">
                        <div className="content__news-two-smallitem-name">
                            <p>{newsElem[4]['title']}</p>

                        </div>
                        <div className="content__news-two-smallitem-more">
                            <div className="content__news-one-elem-date">
                                <p>{newsElem[4]['publishedAt'].slice(0, 10)}</p>
                            </div>
                            <div className="content__news-one-elem-author">
                                <p>{newsElem[4]['author'] != null
                                    ? newsElem[4]['author']
                                    : ''}</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>

    )
}