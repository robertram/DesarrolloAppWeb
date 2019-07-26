
var aBoolean= false;

console.log("Tipo de variable: "+typeof aBoolean);





//Variables
var num1=1, num2=5, num3=3;


//Math.max
var maximo=Math.max(num1, num2, num3);
console.log(maximo);


//if y else 
if(num3>num2 && num3>num1){
        console.log("numero mayor: "+num3);
}else if(num2>num3 && num2>num1){
        console.log("numero mayor: "+num2);
}else { //else if(num1>num2 && num1>num3)
        console.log("numero mayor: "+num1);
}

/*
function primo(numero) {
  for (var i = 2; i < numero; i++) {
    if (numero % i === 0) {
      alert(numero+" No es primo");
      return false;
    }
  }
  if (numero === 1) {
    alert("El numero 1 NO es un numero primo");
  } else {
    alert(numero+" Si es primo");
}
  console.log("-------------------------------------");
}

//primo(prompt("Ingrese un numero","0"));
*/

var algo= "Google";

if(algo.charAt(0).toUpperCase()){
        console.log("1");
        console.log(algo.charAt(0).toUpperCase());
}
/*
var text="";
for (var i = 0; i < 10; i++) {
        text+="*";
        console.log(text);
}*/

var text="";
for (var i = 10; i < 0; i--) {
        text-="*";
        console.log(text);
}

var text2="";
for (var i = 1; i < 10; i++) {
        text2+=i;
        text2+=i;
        console.log(text2);
}



var lado=10;

function imprimirLineaCompleta(lado){
  for (var j=0; j<lado;j++){
    Console.log("*");
}
}

function imprimirLineaVacia(lado){
  Console.log("*");
  for(var j=0;j<lado-2;j++){
    Console.log(" ");
}
Console.log("*");
}

function main(){
        Console.log("De cuantos asteriscos desea el cuadrado?");
        var size= prompt("Ingrese un numero","0");
        
        for(var i=0 ; i<size;i++){
            if (i==0 || i==size-1){
                imprimirLineaCompleta(size); 
        }
        else{
                imprimirLineaVacia(size);
        }
        Console.log("\n");
}
}




/*
var lineas=2;

for(var i=0;i<lineas;i++)
{
        for(var j=0;j<lineas;j++)
        {
                 console.log("*");
        }
}*/
function GetDate(){
        var d = new Date();
        var n = d.getDay();
        Console.log(n);
        return n;
}

GetDate();
Console.log()



