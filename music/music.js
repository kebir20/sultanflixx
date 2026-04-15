const container = document.getElementById("albums");

const albums = [
{
title:"After Hours",
artist:"The Weeknd",
cover:"https://i.scdn.co/image/ab67616d0000b273c6d1a8a4a7c4fa2f2b5756fa"
},
{
title:"Starboy",
artist:"The Weeknd",
cover:"https://i.scdn.co/image/ab67616d0000b2734718e2b124f4c2e64e5b1e0d"
},
{
title:"Divide",
artist:"Ed Sheeran",
cover:"https://i.scdn.co/image/ab67616d0000b2731e2e4f4b2b9d8e5f9f3f4042"
},
{
title:"Justice",
artist:"Justin Bieber",
cover:"https://i.scdn.co/image/ab67616d0000b273f46b9d20259bd6e5a9f4c0c4"
}
];

albums.forEach(album => {

const card = document.createElement("div");

card.style.width="160px";
card.style.margin="10px";

card.innerHTML = `
<img src="${album.cover}" style="width:160px;border-radius:10px">
<p>${album.title}</p>
`;

container.appendChild(card);

});
