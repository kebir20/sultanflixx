function randomPalette(){

const hue = Math.floor(Math.random()*360)

return {

accent:`hsl(${hue},70%,55%)`,

bg:`hsl(${hue},30%,10%)`,

card:`hsl(${hue},30%,20%)`,

text:"#ffffff"

}

}
