function exportSite(html){

const blob = new Blob([html],{type:"text/html"})

const a = document.createElement("a")

a.href = URL.createObjectURL(blob)

a.download="website.html"

a.click()

}
