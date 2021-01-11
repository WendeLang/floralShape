if(litfeito == 'ok'){
    let getmatter = document.getElementById('lit')
    let getsell = document.getElementById('selolit')

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
}else if(litfeito == 'x'){
   let getmatter = document.getElementById('lit')
   let getsell = document.getElementById('selolitneg')

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