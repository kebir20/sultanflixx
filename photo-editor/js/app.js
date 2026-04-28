const frame = document.getElementById("frame")

const ideas = [

"restaurant website",
"gym landing page",
"portfolio website",
"startup website",
"travel blog",
"coffee shop website"

]

function randomIdea(){

const idea = ideas[Math.floor(Math.random()*ideas.length)]

document.getElementById("idea").value = idea

}

function buildSite(){

const idea = document.getElementById("idea").value || "My Website"

const palette = randomPalette()

const sections = aiSections(idea)

const html = buildPage(idea, palette, sections)

frame.srcdoc = html

}

function improveDesign(){

buildSite()

}

function mutateDesign(){

buildSite()

}

document.getElementById("build").onclick = buildSite

document.getElementById("random").onclick = randomIdea

document.getElementById("mutate").onclick = mutateDesign

document.getElementById("improve").onclick = improveDesign

document.getElementById("export").onclick = () => {

exportSite(frame.srcdoc)

}

buildSite()
