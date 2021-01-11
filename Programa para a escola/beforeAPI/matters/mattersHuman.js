function mattersHuman(){
    let footerDiv = document.getElementById('footer-div-human');

    const histDiv = document.getElementById('hist')
    const geogDiv = document.getElementById('geog')
    const filoDiv = document.getElementById('filo')
const socDiv = document.getElementById('soc')


    const heightValue = footerDiv.offsetHeight;

    
    // alert(heightValue)
    if(heightValue == 164){
    footerDiv.style.height = '370px';
    footerDiv.style.transition = 'height 0.4s'

    histDiv.style.opacity = 1;
    histDiv.style.transition = 'opacity 0.1s' ;

    geogDiv.style.opacity = 1;
    geogDiv.style.transition = 'opacity 0.2s';
    
    filoDiv.style.opacity = 1;
    filoDiv.style.transition = 'opacity 0.3s';

    socDiv.style.opacity = 1;
    socDiv.style.transition = 'opacity 0.4s';

    }else if(heightValue == 374){
    footerDiv.style.height = '160px';
    footerDiv.style.transition = 'height 0.4s'

    histDiv.style.opacity = 0;
    histDiv.style.transition = 'opacity 0.4s' ;

    geogDiv.style.opacity = 0;
    geogDiv.style.transition = 'opacity 0.3s';

    filoDiv.style.opacity = 0;
    filoDiv.style.transition = 'opacity 0.2s';

    socDiv.style.opacity = 0;
    socDiv.style.transition = 'opacity 0.1s';
    }
}