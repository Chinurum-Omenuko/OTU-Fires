<slot />

<style>
    nav{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        position: fixed;
        bottom: 0;
        left: 0;
        border: solid 2px red;
        width: 99.8%;
    }

    li{
        list-style: none;
    }

    a{
        text-decoration: none;
    }
</style>

<nav>
    <li><a href="/">News</a></li>
    <li><a href="/map">Map</a></li>
    <li><a href="/report">Report</a></li>
</nav>