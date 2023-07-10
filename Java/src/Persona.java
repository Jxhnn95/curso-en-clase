
public class Persona {
	// propiedades/atributo de clase
	private int edad;
	private String nombre;
	private String domicilio;

	// metodo constructor
	public Persona() {
		this.edad = 0;
		this.nombre = "Sin nombre";
	}

	public Persona(int nuevaEdad, String nombre) {
		this.edad = edad;
		this.nombre = nombre;
	}

	// metodo consultor de edad "con get"
	public int getEdad() {
		return this.edad;
	}

	// metodo modificador de edad "con set"
	public void setEdad(int nuevaEdad) {
		this.edad = nuevaEdad;

	}

	// metodo consultor de nombre "con get"
	public String getNombre() {
		return this.nombre;
	}

	// metodo modificador de nombre "con set"
	public void setNombre(String nombre) {
		this.nombre = nombre;

	}

	public void saludar() {
		System.out.print
		("Hola,Me llamo" + this.nombre + "y tengo" + edad + "años");
	}
	
	public String getDomicilio(String domicilio) ) {
	return this.domicilio;
	}





}