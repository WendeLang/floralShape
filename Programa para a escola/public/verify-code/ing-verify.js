function col() {
    alert('oi')
}


if(ingfeito == 'ok'){
var ing = document.getElementById('ing')
var seloing = document.getElementById('seloing')

ing.addEventListener('mouseenter', entraring)
ing.addEventListener('mouseleave',sairing)

function entraring() {
    seloing.style.opacity = '1'
    seloing.style.transition = 'opacity 0.3s'
}
function sairing(){
    seloing.style.opacity = '0'
    seloing.style.transition = 'opacity 0.3s'
}
}else if(ingfeito == 'x'){
    var ing = document.getElementById('ing')
var seloingneg = document.getElementById('seloingneg')

ing.addEventListener('mouseenter', entraring)
ing.addEventListener('mouseleave',sairing)

function entraring() {
    seloingneg.style.opacity = '1'
    seloingneg.style.transition = 'opacity 0.3s'
}
function sairing(){
    seloingneg.style.opacity = '0'
    seloingneg.style.transition = 'opacity 0.3s'
}
}