let name=Document.getelementbyid('int1')
name.innerhtml="hey all i am moni"
function change()
let button=document.getElementById("button")
button.addEventListener('click',()=>{
   name.innerhtml="hey js"
   name.style.color="chocolate coffee color"
   button.style.background="aqua" 
})