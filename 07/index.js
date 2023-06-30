const nomes = ["Ana", "Joana", "Carlos", "amanda"];


function retornaNomes (value){
    if (value.charAt(0) === "A") 
    return value;
}
let resultado = nomes.filter(retornaNomes);
console.log(resultado);

let busca = nomes.filter( nomesComA  => (nomesComA.charAt(1) === "A"||"a"));
console.log(busca)