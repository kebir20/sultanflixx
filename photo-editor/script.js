const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 1000
canvas.height = 600

let tool="brush"
let drawing=false

let layers=[]
let activeLayer=0

let history=[]
let step=-1

const colorPicker=document.getElementById("colorPicker")
const brushSize=document.getElementById("brushSize")

function addLayer(name){

layers.push({
name:name,
data:canvas.toDataURL()
})

updateLayers()

}

function updateLayers(){

const list=document.getElementById("layerList")

list.innerHTML=""

layers.forEach((l,i)=>{

let li=document.createElement("li")

li.innerText=l.name

li.onclick=()=>selectLayer(i)

list.appendChild(li)

})

}

function selectLayer(i){

activeLayer=i

let img=new Image()

img.onload=()=>{

ctx.clearRect(0,0,canvas.width,canvas.height)

ctx.drawImage(img,0,0)

}

img.src=layers[i].data

}

function saveHistory(){

history=history.slice(0,step+1)

history.push(canvas.toDataURL())

step++

}

function undo(){

if(step<=0)return

step--

restore()

}

function redo(){

if(step>=history.length-1)return

step++

restore()

}

function restore(){

let img=new Image()

img.onload=()=>{

ctx.clearRect(0,0,canvas.width,canvas.height)

ctx.drawImage(img,0,0)

}

img.src=history[step]

}

document.querySelectorAll("[data-tool]").forEach(btn=>{

btn.onclick=()=>{

tool=btn.dataset.tool

}

})

canvas.addEventListener("mousedown",startDraw)
canvas.addEventListener("mousemove",draw)
canvas.addEventListener("mouseup",stopDraw)

function startDraw(e){

drawing=true

ctx.beginPath()

ctx.moveTo(e.offsetX,e.offsetY)

}

function draw(e){

if(!drawing)return

ctx.lineWidth=brushSize.value
ctx.strokeStyle=colorPicker.value

if(tool==="brush"){

ctx.lineTo(e.offsetX,e.offsetY)
ctx.stroke()

}

if(tool==="eraser"){

ctx.globalCompositeOperation="destination-out"

ctx.lineTo(e.offsetX,e.offsetY)
ctx.stroke()

ctx.globalCompositeOperation="source-over"

}

}

function stopDraw(){

drawing=false

saveHistory()

}

document.getElementById("downloadBtn").onclick=()=>{

let link=document.createElement("a")

link.download="image.png"

link.href=canvas.toDataURL()

link.click()

}

document.getElementById("openBtn").onclick=()=>{

document.getElementById("fileInput").click()

}

document.getElementById("fileInput").onchange=e=>{

let file=e.target.files[0]

let reader=new FileReader()

reader.onload=function(ev){

let img=new Image()

img.onload=function(){

canvas.width=img.width
canvas.height=img.height

ctx.drawImage(img,0,0)

addLayer("Image")

saveHistory()

}

img.src=ev.target.result

}

reader.readAsDataURL(file)

}

document.getElementById("undoBtn").onclick=undo
document.getElementById("redoBtn").onclick=redo

document.addEventListener("keydown",e=>{

if(e.ctrlKey && e.key==="z") undo()

if(e.ctrlKey && e.key==="y") redo()

})
