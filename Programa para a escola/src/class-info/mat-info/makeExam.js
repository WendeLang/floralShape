if(matfeito === 'x'){
    var sas = document.createElement('div')
    sas.setAttribute('id', 'makeInSas')
    sas.setAttribute('class', 'animation-up')
    sas.textContent = 'Realizar exame no SAS'
    
    var linkToSas = document.createElement('a')
    linkToSas.href = 'https://portalsas.com.br/home'
    linkToSas.id = 'elink'

var arrowToSas = document.createElement('img')
arrowToSas.setAttribute('src','/public/imagens/arrow.svg')
arrowToSas.setAttribute('id','goSas')


 



    var getDetails = document.getElementById('details-container')

   
    
}
getDetails.appendChild(sas) 
// sas.appendChild(arrowToSas)
linkToSas.appendChild(arrowToSas)
sas.appendChild(linkToSas)