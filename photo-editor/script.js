const canvas=document.getElementById("canvas")
const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight-130

let tool="brush"
let drawing=false
let startX,startY

let history=[]
let step=-1

let texts=[]
let draggingText=null

const color=document.getElementById("color")
const size=document.getElementById("size")

const brightness=document.getElementById("brightness")
const contrast=document.getElementById("contrast")

function saveState(){

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

function getPos(e){

const rect=canvas.getBoundingClientRect()

if(e.touches){

return{

x:e.touches[0].clientX-rect.left,
y:e.touches[0].clientY-rect.top

}

}

return{

x:e.clientX-rect.left,
y:e.clientY-rect.top

}

}

canvas.addEventListener("mousedown",start)
canvas.addEventListener("mousemove",move)
canvas.addEventListener("mouseup",end)

canvas.addEventListener("touchstart",start)
canvas.addEventListener("touchmove",move)
canvas.addEventListener("touchend",end)

function start(e){

drawing=true

let p=getPos(e)

startX=p.x
startY=p.y

ctx.beginPath()
ctx.moveTo(startX,startY)

}

function move(e){

if(!drawing)return

let p=getPos(e)

ctx.lineWidth=size.value

if(tool==="brush"){

ctx.strokeStyle=color.value

ctx.lineTo(p.x,p.y)
ctx.stroke()

}

if(tool==="eraser"){

ctx.globalCompositeOperation="destination-out"

ctx.lineTo(p.x,p.y)
ctx.stroke()

ctx.globalCompositeOperation="source-over"

}

}

function end(e){

drawing=false

let p=getPos(e)

if(tool==="rect"){

ctx.strokeStyle=color.value

ctx.strokeRect(startX,startY,p.x-startX,p.y-startY)

}

if(tool==="circle"){

let r=Math.hypot(p.x-startX,p.y-startY)

ctx.beginPath()

ctx.arc(startX,startY,r,0,Math.PI*2)

ctx.strokeStyle=color.value

ctx.stroke()

}

saveState()

}

document.getElementById("textBtn").onclick=()=>{

let t=prompt("النص")

texts.push({text:t,x:100,y:100})

drawTexts()

}

function drawTexts(){

ctx.font="30px Arial"

texts.forEach(t=>{

ctx.fillStyle=color.value

ctx.fillText(t.text,t.x,t.y)

})

}

brightness.oninput=applyFilters
contrast.oninput=applyFilters

function applyFilters(){

ctx.filter=`
brightness(${brightness.value}%)
contrast(${contrast.value}%)
`

}

document.getElementById("open").onclick=()=>{

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

saveState()

}

img.src=ev.target.result

}

reader.readAsDataURL(file)

}

document.getElementById("undo").onclick=undo
document.getElementById("redo").onclick=redo

document.getElementById("save").onclick=()=>{

let link=document.createElement("a")

link.download="image.png"

link.href=canvas.toDataURL()

link.click()

}
