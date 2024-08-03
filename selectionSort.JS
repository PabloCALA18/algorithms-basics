let datos = [9,6,1,0,12,3,50,4];

function selectionSort (){
 for(let i = 0; i < datos.length - 1; i++){
    for(let j = i + 1; j < datos.length ; j++){
      if( datos[j]<datos[i]){
      swap(i,j,datos)
   }
  }
 }
 
}
function swap(i,j,datos){
  console.log("Se va a cambiar "+ datos[i] + " por " + datos[j]);
  let aux = datos[i];
  datos[i] = datos[j];
  datos[j] = aux;
  console.log(datos);
}
selectionSort()
console.log("Lista final" + datos);