async function loadTrending(){

const token = await getToken()

const res = await fetch(
"https://api.spotify.com/v1/browse/new-releases?limit=20",
{
headers:{
Authorization:"Bearer "+token
}
})

const data = await res.json()

const container=document.getElementById("albums")

data.albums.items.forEach(album=>{

const card=document.createElement("div")
card.className="card"

card.innerHTML=`
<img src="${album.images[0].url}">
<p>${album.name}</p>
`

container.appendChild(card)

})

}

loadTrending()
