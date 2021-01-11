function mattersCod(){
    let footerDiv = document.getElementById('footer-div-cod');

    const portDiv = document.getElementById('port')
    const litDiv = document.getElementById('lit')
    const ingDiv = document.getElementById('ing')
const espDiv = document.getElementById('esp')


    const heightValue = footerDiv.offsetHeight;

    
    // alert(heightValue)
    if(heightValue == 164){
    footerDiv.style.height = '370px';
    footerDiv.style.transition = 'height 0.4s'

    portDiv.style.opacity = 1;
    portDiv.style.transition = 'opacity 0.1s' ;

    litDiv.style.opacity = 1;
    litDiv.style.transition = 'opacity 0.2s';
    
    ingDiv.style.opacity = 1;
    ingDiv.style.transition = 'opacity 0.3s';

    espDiv.style.opacity = 1;
    espDiv.style.transition = 'opacity 0.4s';

    }else if(heightValue == 374){
    footerDiv.style.height = '160px';
    footerDiv.style.transition = 'height 0.4s'

    portDiv.style.opacity = 0;
    portDiv.style.transition = 'opacity 0.4s' ;

    litDiv.style.opacity = 0;
    litDiv.style.transition = 'opacity 0.3s';

    ingDiv.style.opacity = 0;
    ingDiv.style.transition = 'opacity 0.2s';

    espDiv.style.opacity = 0;
    espDiv.style.transition = 'opacity 0.1s';
    }
}