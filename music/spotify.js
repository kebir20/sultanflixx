const client_id="PUT_CLIENT_ID"
const client_secret="PUT_CLIENT_SECRET"

async function getToken(){

const res = await fetch(
"https://accounts.spotify.com/api/token",
{
method:"POST",
headers:{
"Content-Type":"application/x-www-form-urlencoded",
"Authorization":"Basic "+btoa(client_id+":"+client_secret)
},
body:"grant_type=client_credentials"
})

const data = await res.json()

return data.access_token

}
