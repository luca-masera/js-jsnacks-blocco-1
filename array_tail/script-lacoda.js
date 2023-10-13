
const btn = document. querySelector('.btn-primary')
const btnNo = document. querySelector('.btn-danger')
const lista = []
console.log(lista)


btn.addEventListener('click', function(){

    let numeroEl = document.getElementById("numero").value;
    parseInt (numeroEl)
    console.log(numeroEl)

    
    for (let i = 0; i < numeroEl; i++ ){

    let numero;
    numero= Math.round(Math.random()*99)+1;
    console.log(numero)
    lista.push (numero)
    
    }
    for (i = lista.length - 5; i < lista.length; i++)
    console.log(i)
        
    /*lista.slice(-5)
    console.log (lista.slice(-5))*/

})





    

    