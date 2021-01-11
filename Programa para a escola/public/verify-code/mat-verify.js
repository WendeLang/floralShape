
// MATEMATICA

if(matfeito == 'ok'){
    var getmat = document.getElementById('mat')
    var getselomat = document.getElementById('selomat')
    getmat.addEventListener('mouseenter',entrarmat)
    getmat.addEventListener('mouseleave',sairmat)
    
    function entrarmat(){
        getselomat.style.opacity = '1'
        getselomat.style.transition = 'opacity 0.3s'
    }
    function sairmat(){
        getselomat.style.opacity = '0'
    }
    }else if(matfeito == 'x'){
        var getmat = document.getElementById('mat')
    var getselomatneg = document.getElementById('selomatneg')
    getmat.addEventListener('mouseenter',entrarmat)
    getmat.addEventListener('mouseleave',sairmat)
    
    function entrarmat(){
        getselomatneg.style.opacity = '1'
        getselomatneg.style.transition = 'opacity 0.3s'
    }
    function sairmat(){
        getselomatneg.style.opacity = '0'
    }
    
    }
    