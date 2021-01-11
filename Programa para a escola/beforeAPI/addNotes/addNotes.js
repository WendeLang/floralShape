const page = document.getElementById('page');




function addNote(){
       const divBlur = document.createElement('div');
       divBlur.setAttribute('id', 'blur');
       

       const blackDiv = document.createElement('div');
       blackDiv.setAttribute('id', 'blackDiv');
       blackDiv.textContent = 'Adicione suas notas'

       const inputNotes = document.createElement('input', 'number');
       inputNotes.setAttribute('id','inputNotes')
       inputNotes.setAttribute('placeholder', 'Cole suas notas aqui');

const goNotes = document.createElement('div');
goNotes.setAttribute('id', 'goNotes')
goNotes.textContent = 'Ir'

const howDoIt = document.createElement('img')
howDoIt.setAttribute('id','howDoIt')
howDoIt.setAttribute('src', '/public/imagens/howDoIt.gif')





       page.appendChild(blackDiv)
       blackDiv.appendChild(inputNotes)
       blackDiv.appendChild(howDoIt)
       blackDiv.appendChild(goNotes)
       page.appendChild(divBlur)
       


}
