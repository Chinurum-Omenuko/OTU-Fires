<script>
// @ts-nocheck
/** @type {import('./$types').PageData} */
    import Article from '../components/articles/article.svelte';
    export let data;
    export let news = data.news;
</script>


<div class="container">
    <h1>News</h1>
    {#each news as article}
    <div class="headline">
        <h1>{article.title}</h1>
        <img src={article.image_url} alt="">
    </div>
    {/each}
</div>


<style>
    *{
        margin: 0px;
        padding: 0px;
    }

    body
    {
        box-sizing: border-box;
        
    }
    .container
    {
        height: 100vh;
        border: solid 2px red;
        width: 99vw;
    }
</style>

