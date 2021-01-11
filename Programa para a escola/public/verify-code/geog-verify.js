// GEOGRAFIAAAA

if(geofeito == 'ok'){
    var getgeo = document.getElementById('geog')
    var getselogeo = document.getElementById('selogeo')

    getgeo.addEventListener('mouseenter', entrargeo)
    getgeo.addEventListener('mouseleave', sairgeo)

    function entrargeo(){
        getselogeo.style.opacity = '1'
        getselogeo.style.transition = 'opacity 0.3s'
    }

    function sairgeo(){
        getselogeo.style.opacity = '0'
        getselogeo.style.transition = 'opacity 0.3s'
    
    }


    
}else if(geofeito == 'x'){
    var getgeo = document.getElementById('geog')
    var getselogeoneg = document.getElementById('selogeoneg')

    getgeo.addEventListener('mouseenter', entrargeo)
    getgeo.addEventListener('mouseleave', sairgeo)

    function entrargeo(){
        getselogeoneg.style.opacity = '1'
        getselogeoneg.style.transition = 'opacity 0.3s'
    }

    function sairgeo(){
        getselogeoneg.style.opacity = '0'
        getselogeoneg.style.transition = 'opacity 0.3s'
    
    }

}