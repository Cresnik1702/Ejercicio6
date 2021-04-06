// En este ejercicio pide que sumemos todos los números pares de 0 a 100

// El pseudocódigo es de la siguiente manera

//  Proceso suma_numeros_pares
	
//   aqui definimos las variables.

//  	Definir suma Como Entero;
//  	Definir i Como Entero;
	
//  	 aqui vamos a iniciar el contadro i y el acumulador  suma

//  i<- 1;
//	suma<- 0;
	
	
//	 aqui empezamos los algoritmos.
	
//  	Mientras i<=100 Hacer
//  		si i mod 2=0 entonces;
//  			suma<-suma+i;
//  		FinSi
//  		i<-i+1;
//  	FinMientras
	
// 	Escribir "Tu suma es ", suma;
	
	
//  FinProceso

let sumtotal = 0

for (let i = 0; i < 100; i++) {

  if ((i % 2) == 0) {

    sumtotal = sumtotal + i;

    console.log ("El resultado hasta ahora es: " + sumtotal);

  }
  
}