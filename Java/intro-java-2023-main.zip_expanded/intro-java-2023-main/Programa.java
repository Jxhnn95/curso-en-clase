
// los nombres de clase empiezan en May�sculas
public class Programa {

	// m�todo principal de la clase Programa
	public static void main(String[] args) {

		// declaraci�n
		int variable;

		// inicializaci�n
		variable = 7;

		// n�mero entero
		int numero = 0;

		// n�mero decimal
		double decimal = 0.1;

		// booleano (verdadero/falso)
		boolean verdadero = true;
		boolean falso = false;

		// caracter de texto
		char caracter = 'a';

		// cadena de texto
		String unTexto = "Hola Mundo!";

//		System.out.println("Hola Mundo");
//
//		System.out.println(unTexto);
//
//		System.out.println(unTexto + " 2");
//
//		System.out.print("Sin salto de l�nea");
//		System.out.print("L�nea 2\n\n");

		int a = 1;
		int b = 3;

		int suma = a + b;

		double c = 3.0;

		System.out.println("Suma: " + suma);

		// al sumar un decimal con un entero,
		// el resultado es decimal
		double suma2 = a + c;

		System.out.println("Suma2: " + suma2);

		boolean booleano = verdadero || falso;

		int edad1 = 19;

		if (edad1 >= 18) {
			System.out.println("Eres mayor de edad");
		} else {
			System.out.println("Eres menor de edad");
		}

		int mes = 16;

		switch (mes) {
		case 1:
			System.out.println("Enero");
			break;
		case 2:
			System.out.println("Febrero");
			break;
		case 3:
			System.out.println("Marzo");
			break;
		case 4:
			System.out.println("Abril");
			break;
		default:
			System.out.println("Mes desconocido...");
			break;
		}

//		int i = 0;
//
//		while (i < 10) {
//			System.out.println("Iteraci�n while " + i);
//			i++;
//		}

//		for (int j = 0; j < 10; j++) {
//			System.out.println("Iteraci�n for " + j);
//		}

		// nueva lista con valores al inicio
		int lista[] = { 1, 2, 3 }; // [1,2,3]

		// nueva lista vac�a (indicamos el tama�o)
		int lista2[] = new int[3]; // [0,0,0]

		lista2[0] = 6; // [6, 0, 0]
		lista2[1] = 3; // [6, 3, 0]
		lista2[2] = -5; // [6, 3, -5]

		// crear un objeto de clase Persona
		Persona persona1 = new Persona();

		// guardar la edad de persona1 en una variable
		int edadPersona = persona1.getEdad();

		System.out.println("La edad es " + edadPersona);

		// modificar la edad
		persona1.setEdad(1);

		System.out.println("Ahora la edad es " + persona1.getEdad());

		System.out.println("El nombre es " + persona1.getNombre());

		persona1.setNombre("Ana L�pez");

		System.out.println("El nombre es " + persona1.getNombre());

		persona1.saludar();

		Persona paco = new Persona(27, "Paco Mart�nez");
		
		paco.saludar();

	}
	//  ultimo-añadido por mi
	public static int SumarPositivosint (a, int b ) { throws Exception{
		if (a<0 || )b<0){
			throws new Exception ("Los numeros deben ser positivos");
			}
		return positivos}}
	}

}
