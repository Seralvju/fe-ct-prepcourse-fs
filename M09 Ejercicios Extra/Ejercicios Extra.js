/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arregloPadre=[];
   let claves=Object.keys(objeto);
   let valores=Object.values(objeto);
   for (let i=0; i<valores.length;i++){
      arregloPadre.push([claves[i],valores[i]]);
   }

   return arregloPadre;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var letras=[];
   letras.push(string.charAt(0));
   //letras[0]=string.charAt(0);
   for (let i=1; i<string.length;i++){
     for(j=0;j<letras.length;j++){
      if(letras[j]!=string.charAt(i)){
         //letras.push(string.charAt(i));
         letras[letras.length]=string.charAt(i);
      }
     }
   }

   var cantidad=[];
   for (let i=0;i<letras.length;i++){
      let contador=0;
      for (let j=0;j<string.length;j++){         
         if(letras[i]===string.charAt(j))
            contador++;
      }
      cantidad.push(contador);
      //cantidad[i]=contador;
   }
   
   var objeto=new Object();
   for (let i=0;i<letras.length;i++){
      objeto[letras[i]]=cantidad[i];
   }

   return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let token ='';
   let minus ='';
   let mayus ='';

   for (let i=0; i<string.length;i++){
      token= string.charAt(i).toUpperCase();
      if(token===string.charAt(i))
         mayus+=string.charAt(i);
      else
         minus+=string.charAt(i);
   }

   return mayus+minus;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var rollback="";
   var rpta="";
   for (let i=0;i<frase.length;i++){
      if(frase.charAt(i)===" "){
         roll(false,rollback.length);
      }
      else{
         rollback+=frase.charAt(i);
      }
      if(i===frase.length-1)      {
         roll(true,rollback.length);         
      }

   }
   function roll(condicion,indice){
      while(indice!=-1){
         rpta+=rollback.charAt(indice);
         indice--;
         if(indice===-1){
            rollback="";
            if(!condicion)
               rpta+=" ";
         }
      }  
   }

   return rpta;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var bandera="Es capicua";
   var numeroString=numero.toString();
   var indice=numeroString.length/2;

   for (let i=0; i<indice;i++){
      if(numeroString.charAt(i)!=numeroString.charAt(numeroString.length-i-1)){
         bandera ="No es capicua";
      }
   }
   return bandera;
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   string=string.replace("a","");
   string=string.replace("b","");
   string=string.replace("c","");
   return string;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   let cambio="";

   for(let i=1; i<arrayOfStrings.length;i++){
      for (let j=0; j<arrayOfStrings.length-1;j++){
         if(arrayOfStrings[j].length>arrayOfStrings[i].length){
            cambio=arrayOfStrings[i];
            arrayOfStrings[i]=arrayOfStrings[j];
            arrayOfStrings[j]=cambio;
         }
      }
   }  
   return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var interseccion=[];
   for (let i=0; i<array1.length;i++){
      for (let j=0; j<array2.length;j++){
         if(array1[i]===array2[j])
            interseccion.push(array1[i]);
      }
   }

   return interseccion;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
