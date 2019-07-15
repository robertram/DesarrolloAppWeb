

function GetDate(){
    let today = new Date().toLocaleDateString()
    console.log(today);
    alert("La fecha de hoy es "+today);
}

//GetDate();

function RadioCirculo(Circun){
    let radio= Circun / (2*3.14);
    return radio;
}

//alert(RadioCirculo(1));



var miAuto= {
    marca:"Toyota", 
    anno: 2006,
    sayHi() { // same as "sayHi: function()"
    alert("Hello World");
  }
}


//console.log(miAuto.sayHi());



