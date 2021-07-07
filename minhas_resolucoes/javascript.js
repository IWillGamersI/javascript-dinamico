

function carrega_pagina(){
    
    

    var msg = window.document.getElementById('msg')

    var img = window.document.getElementById("img")

    var data = new Date()

    var hora = data.getHours()
    var minuto = data.getMinutes()
    

    

    if(hora >= 0 && hora < 12)
    {
        msg.innerHTML = `Agora são ${hora}:${minuto} da manhã.<br> <strong>BOM DIA!!!</strong>`
        img.src="imagens/nascer_do_sol.jpg"
        document.body.style.background = '#e4c530'
        
    }
    else if(hora >= 12 && hora < 18)
    {
        msg.innerHTML = `Agora são ${hora} horas da manhã.<br> <strong>BOA TARDE!!!</strong>`
        img.src="imagens/por_do_sol.jpg"
        document.body.style.background = '#f56f18'
    }
    else
    {
        msg.innerHTML = `Agora são ${hora} horas da manhã.<br> <strong>BOA NOITE!!!</strong>`
        img.src="imagens/noite.jpg"
        document.body.style.background = '#243352'
    }

  
  
}