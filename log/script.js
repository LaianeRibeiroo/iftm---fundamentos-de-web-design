
console.log ("Olá");
console.log (2+2);
console.log ("2+2" , 2+2 );

var a = 35;
var b = 2;
console.log(a+b);
console.log(a*b);

b= "bala";
console.log(b)
console.log(a+b);

A = document.getElementById("titulo").innerHTML;
console.log(A);
B = document.getElementById("paragrafo").innerHTML;
console.log(B);

console.log(A+B);
console.log("Texto do título: "+A);
console.log("Texto do parágrafo: "+B);
console.log("____PEGANDO VALORES ATRAVÉS DO ID (JQUERY):____");
var C = $("#titulo").text();
console.log(C);

console.log("____PEGANDO VALORES NUMA TABELA ATRAVÉS DO ID (JQUERY):____");
var vr1 = $("#vr1").text();
console.log(vr1);
var vr2 = $("#vr2").text();
console.log(vr2);
console.log(vr1*1 +vr2*1);

$("#result").text(vr1*1+vr2*1);