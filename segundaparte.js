let num1=parseInt(prompt ("insira um número inteiro"));
let num2=parseInt (prompt("insira um número inteiro diferente e maior do que o primeiro que você digitou."));
let soma=0;
let numero;

for( numero = num1; numero<num2; numero++)
{
    if(numero%2 !== 0){
        soma= soma +numero


    }

}
    
alert(soma);
