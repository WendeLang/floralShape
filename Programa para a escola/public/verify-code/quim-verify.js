// QUIMICA


if(quimfeito == 'ok'){
    var getquim = document.getElementById('quim')
    var getseloquim = document.getElementById('seloquim')
    var getseloquimneg = document.getElementById('seloquimneg')

    getquim.addEventListener('mouseenter', entrarquim)
    getquim.addEventListener('mouseleave',sairquim)



    function entrarquim(){
        getseloquim.style.opacity = '1'
        getseloquim.style.transition = 'opacity 0.3s'
    }




    function sairquim(){
    getseloquim.style.opacity = '0'
    getseloquim.style.transition = 'opacity 0.3s'
    }
}else if(quimfeito == 'x'){
    var getquim = document.getElementById('quim')
    var getseloquim = document.getElementById('seloquim')
    var getseloquimneg = document.getElementById('seloquimneg')

    getquim.addEventListener('mouseenter', entrarquim)
    getquim.addEventListener('mouseleave',sairquim)



    function entrarquim(){
        getseloquimneg.style.opacity = '1'
        getseloquimneg.style.transition = 'opacity 0.3s'
    }

 


    function sairquim(){
    getseloquimneg.style.opacity = '0'
    getseloquimneg.style.transition = 'opacity 0.3s'
    }
}