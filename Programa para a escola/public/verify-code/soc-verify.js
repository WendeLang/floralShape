if(socfeito == 'ok'){
    let getmatter = document.getElementById('soc')
    let getsell = document.getElementById('selosoc')

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
}else if(socfeito == 'x'){
   let getmatter = document.getElementById('soc')
   let getsell = document.getElementById('selosocneg')

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