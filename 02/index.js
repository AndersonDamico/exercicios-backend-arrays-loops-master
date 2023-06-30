const letras = ["A", "a", "B", "C", "L", "z"];

let encontrado = false;

for (let letra of letras){
    if(letra === 'e'){
        console.log('tem a letra "e"');
        encontrado = true;
        break;
    }
}if (!encontrado) {
    console.log('Nenhuma letra "e" foi encontrada.')
}



const letras1 = ["A", "a", "B", "C", "E", "e"];

let encontradas = 0;

for (let vogais of letras1){
    if(vogais ==='E'|| vogais ==='e'){
        encontradas++;  
    }
}console.log(`Foram encontradas ${encontradas} letras "E" ou "e"`)
