// PORTUGUESSSS

if(portfeito == 'ok'){
    getport = document.getElementById('port')
    getseloport = document.getElementById('seloport')

    getport.addEventListener('mouseenter', entrarport)
    getport.addEventListener('mouseleave', sairport)

    function entrarport(){
        getseloport.style.opacity = '1'
        getseloport.style.transition = 'opacity 0.3s'
    }
    function sairport(){
        getseloport.style.opacity = '0'
        getseloport.style.transition = 'opacity 0.3s'
    }
}else if(portfeito == 'x'){
    getport = document.getElementById('port')
    getseloportneg = document.getElementById('seloportneg')

    getport.addEventListener('mouseenter', entrarport)
    getport.addEventListener('mouseleave', sairport)

    function entrarport(){
        getseloportneg.style.opacity = '1'
        getseloportneg.style.transition = 'opacity 0.3s'
    }
    function sairport(){
        getseloportneg.style.opacity = '0'
        getseloportneg.style.transition = 'opacity 0.3s'
    } 
}