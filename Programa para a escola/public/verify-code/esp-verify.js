
//ESPANHOLLLLLLLLL

if(espfeito == 'ok'){
    getesp = document.getElementById('esp')
    getseloesp = document.getElementById('seloesp')

    getesp.addEventListener('mouseenter',entraresp)
    getesp.addEventListener('mouseleave',sairesp)

    function entraresp(){
        getseloesp.style.opacity = '1'
        getseloesp.style.transition = 'opacity 0.3s'
    }

    function sairesp(){
        getseloesp.style.opacity = '0'
        getseloesp.style.transition = 'opacity 0.3s'
    }
}else if(espfeito == 'x'){
    getesp = document.getElementById('esp')
    getseloespneg = document.getElementById('seloespneg')

    getesp.addEventListener('mouseenter',entraresp)
    getesp.addEventListener('mouseleave',sairesp)

    function entraresp(){
        getseloespneg.style.opacity = '1'
        getseloespneg.style.transition = 'opacity 0.3s'
    }

    function sairesp(){
        getseloespneg.style.opacity = '0'
        getseloespneg.style.transition = 'opacity 0.3s'
    
}
}