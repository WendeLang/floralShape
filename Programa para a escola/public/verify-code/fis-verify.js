if(fisfeito == 'ok'){
    let getmatter = document.getElementById('fis')
    let getsell = document.getElementById('selofis')

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
}else if(fisfeito == 'x'){
   let getmatter = document.getElementById('fis')
   let getsell = document.getElementById('selofisneg')

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