
const fruttaFrigo = [ 
    'banana', 
    'mela', 
    'pera', 
    'ciliegia', 
    'arancia', 
    'mandarino', 
    'cocomero', 
    'limone', 
    'fragola'
]

fruttaFrigo.push('pesca')

console.log(fruttaFrigo)


let write;
let flag = false;

for(let i = 0; i < fruttaFrigo.length; i++){
    let cocktail = fruttaFrigo [i];
    

    
    if(cocktail === 'cocomero'){
        write = "Trovato! Devo solo preparare il cocktail."
        flag = true;
        console.log(write,flag); 
       
        
    } else if (cocktail !=='cocomero'){
        write = "Oh no, devo uscire a comprare il cocomero!"
        
        console.log(write);
    }



}

