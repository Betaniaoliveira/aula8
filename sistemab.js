


let n1 =parseInt(prompt("Insira o seu saldo inicial"));
let n2 =parseInt(prompt("Insira o valor da compra"));
let SaldoFinal= n1-n2; 
let contador = 0; 

if(n2<=n1){ SaldoFinal= n1-n2;  alert ("Compra realizada com sucesso");}

else{alert("Saldo Negativo"); contador++;}



