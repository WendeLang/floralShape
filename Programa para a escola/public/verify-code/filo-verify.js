 if(filofeito == 'ok'){
     let getmatter = document.getElementById('filo')
     let getsell = document.getElementById('selofilo')

     getmatter.addEventListener('mouseenter', funcenter)
     getmatter.addEventListener('mouseleave', funcout)

     function funcenter(){
         getsell.style.opacity = '1';
         getsell.style.transition = 'opacity 0.3s';
     }
     
     function funcout(){
        getsell.style.opacity = '0';
        getsell.style.transition = 'opacity 0.3s';
     }
 }else if(filofeito == 'x'){
    let getmatter = document.getElementById('filo')
    let getsell = document.getElementById('selofiloneg')

    getmatter.addEventListener('mouseenter', funcenter)
    getmatter.addEventListener('mouseleave', funcout)

    function funcenter(){
        getsell.style.opacity = '1';
        getsell.style.transition = 'opacity 0.3s';
    }
    
    function funcout(){
       getsell.style.opacity = '0';
       getsell.style.transition = 'opacity 0.3s';
    }
 }