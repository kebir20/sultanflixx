function enableDrag(){

let dragged

document.querySelectorAll("section").forEach(sec=>{

sec.draggable=true

sec.addEventListener("dragstart",()=>{

dragged=sec

})

sec.addEventListener("dragover",e=>{

e.preventDefault()

})

sec.addEventListener("drop",()=>{

sec.before(dragged)

})

})

}
