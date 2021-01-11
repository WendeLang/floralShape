function mattersNatu(){
    let footerDiv = document.getElementById('footer-div-natu');

    const bioDiv = document.getElementById('bio')
    const quimDiv = document.getElementById('quim')
    const fisDiv = document.getElementById('fis')
   
 


    const heightValue = footerDiv.offsetHeight;

    
    // alert(heightValue)
    if(heightValue == 164){
    footerDiv.style.height = '320px';
    footerDiv.style.transition = 'height 0.3s'

    bioDiv.style.opacity = 1;
    bioDiv.style.transition = 'opacity 0.1s' ;

    quimDiv.style.opacity = 1;
    quimDiv.style.transition = 'opacity 0.2s';
    
    fisDiv.style.opacity = 1;
    fisDiv.style.transition = 'opacity 0.3s';

    }else if(heightValue == 324){
    footerDiv.style.height = '160px';
    footerDiv.style.transition = 'height 0.3s'

    bioDiv.style.opacity = 0;
    bioDiv.style.transition = 'opacity 0.3s' ;

    quimDiv.style.opacity = 0;
    quimDiv.style.transition = 'opacity 0.2s';

    fisDiv.style.opacity = 0;
    fisDiv.style.transition = 'opacity 0.1s';
    }

}

