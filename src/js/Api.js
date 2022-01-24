import React from "react";


export default class Api {

    static API_KEY = "06c651deb2484169890e39c41032ae2c"
    static API_KEY2 = "08d8d8b4647c42f5a5b9ebb642524e06"

    

    static async getActualNewsRu(categories='general'){
        let res = await fetch('https://newsapi.org/v2/top-headlines?country=ru&apiKey='+this.API_KEY2+'&pageSize=100&category='+categories)
            .then(res => res.json());
        //console.log(res)
        return res;
    }
    static async getActualNewsQ(q=""){
        let res = await fetch('https://newsapi.org/v2/everything?q='+q+'&apiKey='+this.API_KEY2)
            .then(res => res.json());
        //console.log(res)
        return res;
    }


}

