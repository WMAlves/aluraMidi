function tocaSom (seletorAudio){

        const elemento = document.querySelector(seletorAudio);

        if(elemento && elemento.localName ==='audio'){
            elemento.play();
        }
        else{
            console.log('Eleme nto não encontrado ou Seletor invalido');
        }
    }      
    const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;   //template string         
    tecla.onclick = function () {
        tocaSom(idAudio);
        console.log(tocaSom);
    }; 

    tecla.onkeydown = function (evento) {

        //console.log(evento.code ==='Space');
        //console.log(evento.code==='Enter');
       //console.log(evento);

      //#region EXPLICAÇÃO "==" E "===" 
            // a diferença entre "==" e "===" é os 3 iguais irá comparar se o tipo de variável também é o mesmo, diferente do "==" ex.
            //1=='1' True  (AQUI COMPARA NUMEROS)
            //1==='1' False (AQUI COMPARA ATÉ O TIPO DE DADO)
      //#endregion
        
      if (evento.code == 'Space'|| evento.code==='Enter'|| evento.code==='NumpadEnter') {
            tecla.classList.add('ativa');
        }
        tecla.onkeyup = function () {
            tecla.classList.remove('ativa');
        }
        


    }






}