const client_id="3f7c081894114ff0ae4139fb0e633ba2"
const client_secret="0ba52b56f6724128ba9dc447c00ce187"

async function getToken(){

const res = await fetch("https://accounts.spotify.com/api/token",{
method:"POST",
headers:{
"Content-Type":"application/x-www-form-urlencoded",
"Authorization":"Basic "+btoa(CLIENT_ID+":"+CLIENT_SECRET)
},
body:"grant_type=client_credentials"
})

const data = await res.json()

return data.access_token

}
