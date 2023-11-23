function imc (peso,altura){
 peso = 80
 altura = 1.70
  
 return (peso / (altura*altura)).toFixed(2);
}
console.log(imc("80", "1.70"))