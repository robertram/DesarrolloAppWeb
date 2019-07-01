
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




/*
var lineas=2;

for(var i=0;i<lineas;i++)
{
        for(var j=0;j<lineas;j++)
        {
                 console.log("*");
        }
}*/




