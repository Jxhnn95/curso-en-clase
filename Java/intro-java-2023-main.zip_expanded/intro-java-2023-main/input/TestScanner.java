package input;

import java.util.Scanner;

public class TestScanner {

	public static void main(String[] args) {

		// inicializar un nuevo Scanner con la entrada standard
		Scanner teclado = new Scanner(System.in);

		System.out.print("Introduce un n�mero entero: ");

		// leer el siguiente entero que se env�e por teclado
		int numero = teclado.nextInt();
//
		System.out.println("Has introducido el " + numero);

		System.out.print("Introduce un n�mero decimal: ");
		double decimal = teclado.nextDouble();
//
		System.out.println("Has introducido el " + decimal);

		System.out.print("�C�mo te llamas? ");
		String nombre = teclado.nextLine();
//
		System.out.println("Hola, " + nombre);
		
//		System.out.print("�Quieres cerrar sesi�n? ");
		char respuesta = teclado.next().charAt(0);
		
//		System.out.println("Respuesta: " + respuesta);

	}

}
