async function loadTrending(){

const token = await getToken()

const res = await fetch(
"https://api.spotify.com/v1/browse/new-releases?limit=30",
{
headers:{Authorization:"Bearer "+token}
})

const data = await res.json()

const container=document.getElementById("albums")

data.albums.items.forEach(album=>{

container.innerHTML+=`

<div class="card" onclick="openAlbum('${album.id}')">

<img src="${album.images[0].url}">

<p>${album.name}</p>

</div>

`

})

}

function openAlbum(id){

window.location.href="album.html?id="+id

}

loadTrending()
