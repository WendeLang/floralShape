//HISTÓRIAAAA


if(histfeito == 'ok'){
    gethist = document.getElementById('hist')
    getselohist = document.getElementById('selohist')
    

    gethist.addEventListener('mouseenter' , entrarhist)
gethist.addEventListener('mouseleave' , sairhist)

    function entrarhist(){
        getselohist.style.opacity = '1'
        getselohist.style.transition = 'opacity 0.3s'
        
    }

    function sairhist(){
        getselohist.style.opacity = '0'
        getselohist.style.transition = 'opacity 0.3s'
    }

}else if(histfeito == 'x'){
    gethist = document.getElementById('hist')
    getselohistneg = document.getElementById('selohistneg')
    

    gethist.addEventListener('mouseenter' , entrarhist)
gethist.addEventListener('mouseleave' , sairhist)

    function entrarhist(){
        getselohistneg.style.opacity = '1'
        getselohistneg.style.transition = 'opacity 0.3s'
        
    }

    function sairhist(){
        getselohistneg.style.opacity = '0'
        getselohistneg.style.transition = 'opacity 0.3s'
    }
    
}