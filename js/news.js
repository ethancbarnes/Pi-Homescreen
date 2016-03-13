//https://www.reddit.com/r/news/top.json?t=day

function getNews() {
    $.getJSON('https://www.reddit.com/r/news/top.json?t=day', function(json) {
        document.getElementById('news0').innerHTML=("• "+json.data.children[0].data.title);
        document.getElementById('news1').innerHTML=("• "+json.data.children[1].data.title);
        document.getElementById('news2').innerHTML=("• "+json.data.children[2].data.title);
    });
    
    setTimeout("getNews()", 3600000);
}

getNews();