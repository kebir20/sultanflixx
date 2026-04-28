function buildPage(idea, palette, sections){

let htmlSections = ""

sections.forEach(sec => {

 if(Components[sec]){

  htmlSections += Components[sec](idea)

 }

})

return `
<!DOCTYPE html>
<html>
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">

<style>

body{
margin:0;
font-family:Arial;
background:${palette.bg};
color:${palette.text};
}

section{
padding:40px;
}

.hero{
text-align:center;
padding:80px 40px;
background:${palette.card};
}

.cards{
display:flex;
gap:20px;
flex-wrap:wrap;
}

.cards div{
flex:1;
min-width:150px;
background:${palette.card};
padding:20px;
border-radius:10px;
}

.gallery{
display:flex;
gap:10px;
flex-wrap:wrap;
}

.gallery div{
flex:1;
min-width:120px;
height:100px;
background:${palette.card};
}

input{
display:block;
margin-bottom:10px;
padding:10px;
width:100%;
}

</style>

</head>

<body>

${htmlSections}

</body>
</html>
`
}
