
// CIÊNCIA

 



if(cienfeito == 'ok'){
    var getcien = document.getElementById('cien')
    var getselocien = document.getElementById('selocien')
    
    getcien.addEventListener('mouseenter', entrarcien)
    getcien.addEventListener('mouseleave', saircien)
    
    function entrarcien(){
        getselocien.style.opacity = '1'
        getselocien.style.transition = 'opacity 0.3s'
    }
    function  saircien(){
        getselocien.style.opacity = '0'
        getselocien.style.transition = 'opacity 0.3s'
    }
    }else if(cienfeito == 'x'){
        var getcien = document.getElementById('cien')
    var getselocieneg = document.getElementById('selocieneg')
    
    getcien.addEventListener('mouseenter', entrarcien)
    getcien.addEventListener('mouseleave', saircien)
    
    function entrarcien(){
        getselocieneg.style.opacity = '1'
        getselocieneg.style.transition = 'opacity 0.3s'
    }
    function  saircien(){
        getselocieneg.style.opacity = '0'
        getselocieneg.style.transition = 'opacity 0.3s'
    }
    
    }