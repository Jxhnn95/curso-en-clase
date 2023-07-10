public class Main {

	// Main nombre de carpeta
	// los nombres de clase empiezan en Mayuscula

	// TODO Auto-generated method stub
	// metodo principal de la clase Main
	public static void main(String[] args) {
		
		int variable;
		variable= 7;
		
		//numero entero
		int numero = 0;
		
		//numero decimal
		double decimal= 0.1;
		
		//boleano (verdadero/falso)
		boolean verdadero = true;
		boolean falso = false;
	   
		//caracter de texto
		char caracter ='a';
				
		//cadena de texto
		String unTexto = "Hola Mundo";
		
		
		System.out.println("Hola Mundo");
		
		System.out.println(unTexto);
		System.out.println(unTexto +" 2");
		System.out.print("Sin salto de linea");
		System.out.println("Linea 2");

int a= 1;
int b = 3;
int suma= a+b;
System.out.println("Suma:"+ suma );

double c = 2.1;
//para suma run decimal con un entero :
//el resultado es decimal
 double suma2= a+c;

System.out.println("Suma2:"+ suma2);

boolean booleano = verdadero || falso;



//int double ,boolean, char

int edad1 = 16;
if(edad1>=18) {
	System.out.println("Eres mayor de edad");
}else {
	System.out.println("Eres menor de edad");
}


int mes= 1;
switch(mes){
	case 1:
	System.out.println("Enero");
	break;
	case 2:
	System.out.println("Febrero");
	break;
	case 3:
	System.out.println("Marzo");
	break;
	default:
	System.out.println("Mes desconocido... ");
	break;

}

int i = 0;
while (i<10) {
	System.out.println("Iteraciion " + i);
	i++;
	
}

for (int j=0; j<10;j++) {
	System.out.println("Iteraciion " + j);
}
//lista de valores en inicio
int lista []= {1,2,3,4,5};

//lista vacia con 3 lugares
int lista2[]= new int[3];//[0,0,0]
lista2[0]=6;//[6,0,0]
lista2[1]=3;//[6,3,0]
lista2[2]=-5;//[6,3,-5]



Persona persona1= new Persona();

int edadPersona = persona1.getEdad();

System.out.println("La edad es " + edadPersona);

persona1.setEdad(11);

System.out.println("Ahora la edad es " + persona1.getEdad());

//consultor de nombre y modificador de edad
System.out.println("El nombre es" + persona1.getNombre());
persona1.setNombre("Ana Lopez");

System.out.println("El nombre es" + persona1.getNombre());

persona1.saludar();



Persona paco = new Persona( 27,"Paco Martinez");
paco.saludar();

}
}