// @ts-nocheck
/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const res = await fetch("https://api.thenewsapi.com/v1/news/top?api_token=ZlvVHe5VFdho14bjgUj4bIjLi8g6ymZf5vAWBsPt&locale=us&ca&limit=3&search=wildfire|forestfire")
    
    const info = await res.json()

    const news = info.data

    console.log(news)
    
    return {news}
    
}

