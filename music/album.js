const params = new URLSearchParams(window.location.search)

const albumId=params.get("id")

async function loadAlbum(){

const token = await getToken()

const res = await fetch(
"https://api.spotify.com/v1/albums/"+albumId,
{
headers:{Authorization:"Bearer "+token}
})

const album=await res.json()

document.getElementById("title").innerText=album.name

const list=document.getElementById("tracks")

album.tracks.items.forEach(track=>{

list.innerHTML+=`

<div onclick="play('${track.id}')">

${track.name}

</div>

`

})

}

function play(id){

window.location.href="player.html?track="+id

}

loadAlbum()
