const frame = document.getElementById("frame")

function build(){

const idea = document.getElementById("idea").value || "My Website"

const palette = randomPalette()

const sections = aiSections(idea)

let html = ""

sections.forEach(sec=>{

if(Components[sec]){

html += Components[sec](idea)

}

})

const page = `
<html>

<body style="background:${palette.bg};color:${palette.text};font-family:Arial">

${html}

</body>

</html>
`

frame.srcdoc = page

setTimeout(enableDrag,500)

}

document.getElementById("build").onclick = build

document.getElementById("export").onclick = ()=>{

exportSite(frame.srcdoc)

}
