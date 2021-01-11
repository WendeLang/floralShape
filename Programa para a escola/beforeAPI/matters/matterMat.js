function matterMat(){
    let footerDiv = document.getElementById('footer-div-mat');

    const matDiv = document.getElementById('mat')
   
 


    const heightValue = footerDiv.offsetHeight;

    
    // alert(heightValue)
    if(heightValue == 164){
    footerDiv.style.height = '240px';
    footerDiv.style.transition = 'height 0.3s'

    matDiv.style.opacity = 1;
    matDiv.style.transition = 'opacity 0.1s' ;


    }else if(heightValue == 244){
    footerDiv.style.height = '160px';
    footerDiv.style.transition = 'height 0.3s'

    matDiv.style.opacity = 0;
    matDiv.style.transition = 'opacity 0.3s' ;

  
    }
}