const anime_dict = require('./data/anime_dict.js')

const searchByName = async (searchurl) => {
    try {
        const apiurl = `https://api.jikan.moe/v3/search/anime?q=${searchurl}&limit=1`
        const res = await fetch(apiurl);
        const obj = await res.json();
        console.log(obj.results[0].title);
        return obj.results[0].mal_id;
    } catch (e) {
        console.log(e);
        return 0;
    }
}

const main = async () => {
    let newMap = new Map();
    for (const prop in anime_dict) {
        const malid = await searchByName(anime_dict[prop]);
        newMap.set(prop, malid);
    }
    console.log(newMap);
}
