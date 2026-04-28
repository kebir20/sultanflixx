function aiSections(idea){

idea = idea.toLowerCase()

const map = {

restaurant:["hero","menu","gallery","testimonials","contact"],

gym:["hero","features","pricing","testimonials","contact"],

portfolio:["hero","gallery","about","contact"],

startup:["hero","features","pricing","testimonials","contact"],

blog:["hero","posts","about","contact"]

}

for(const key in map){

if(idea.includes(key)){

return map[key]

}

}

return ["hero","about","contact"]

}

function aiLayout(idea){

idea = idea.toLowerCase()

if(idea.includes("startup")) return "split"

if(idea.includes("portfolio")) return "cards"

return "stack"

}
