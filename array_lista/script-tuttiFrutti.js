
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
        flag = true;
        console.log(flag);       
        
    } 
}

if (flag === true){
    write = "Trovato! Devo solo preparare il cocktail."
    console.log(write)
}else{
    write = "Oh no, devo uscire a comprare il cocomero!"
    console.log(write)
}    
        
    