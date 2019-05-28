num1=parseInt(prompt("Dame el número con el que empezará a contar pepito"));
num2=parseInt(prompt("Dame el número con el que acabará pepito"));

while((num2+1)>num1){
    alert(num1)
    num1=num1+1;
}

peso=parseFloat(prompt("¿Cuanto pesas gordito?"));
peso_ideal=parseFloat(prompt("¿Cuanto quieres pesar perrito?"));
cambio_de_peso=parseFloat(prompt("¿Cuanto bajas por semana?"));
count=0;

while(peso!=(peso_ideal-1)){
    alert("es la semana "+count+" y pesas "+peso);
    peso=peso-cambio_de_peso;
    count=count+1;
}