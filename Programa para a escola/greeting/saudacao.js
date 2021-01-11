function saudacao(){
    var data = new Date();
    var hora = data.getHours();
var geter= document.getElementById('hora')
    if(hora <= 12){
geter.innerHTML='Bom dia man'
    }else if(hora < 18){
        geter.innerHTML='Boa tarde man'
    }else{
        geter.innerHTML='Boa noite man'
    }
}