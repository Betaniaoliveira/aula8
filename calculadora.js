
let numero1 =parseInt(prompt("Escreva um número inteiro"));
let a =(prompt("Escolha uma das operações:(+), (-), (*), (/)"));
let numero2 = parseInt(prompt("Escreva um número inteiro diferente do primeiro"));
operacao(numero1,a,numero2);

function operacao(numero1, a, numero2,) {
  if(a=="+")  
    {alert    ( numero1+numero2);   }
   
    else if(a=="-"){
      alert   (numero1 - numero2);
    }
   else if(a=="*"){
    alert   (numero1 * numero2);
   }
   else if (a=="/"){
    alert   (numero1 / numero2);

   }

  
}


