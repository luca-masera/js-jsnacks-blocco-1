
const btn =document. querySelector('.btn-primary')




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
  

})



const lista = [

]
console.log(lista)