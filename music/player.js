const params = new URLSearchParams(window.location.search)

const track=params.get("track")

document.getElementById("player").innerHTML=`

<iframe
src="https://open.spotify.com/embed/track/${track}"
width="100%"
height="100"
frameborder="0"
allow="autoplay">
</iframe>

`
