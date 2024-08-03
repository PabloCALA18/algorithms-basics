let lista = [1,2,3,4,5,8,10,14,40,78];
linealSearch(lista,10);

function linealSearch(lista, n){
 
 for(let i = 0 ;i < lista.length ; i++ ){
  if(lista[i] == n){

    return true;
  }
 }
 return false;

}
console.log(linealSearch(lista, 10 ));