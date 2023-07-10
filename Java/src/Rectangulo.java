
public class Rectangulo {
	private double base;
	private double altura;
	private double area;
	// crear cuadrado decimal

	public Rectangulo() {

	}
	// constructor al que le indiquemos el lado
	// metodos consultores
	// metodos modificadores

	// metodo constructor
	public Rectangulo(double nuevaBase, double nuevaAltura) {
		this.base = nuevaBase;
		this.altura = nuevaAltura;
	}

	// metodo consultor de base /altura "con get"
	public double getBase() {
		return this.base;
	}

	public double getAltura() {
		return this.altura;
	}

	// metodo modificador de base /altura "con set"
	public void setBase(double base) {
		this.base = base;
	}

	public void setAltura(double altura) {
		this.altura = altura;
	}

	public double calcularArea() {
		return this.base * this.altura;

	}

	public double calcularPerimetro() {
		return (2 * this.base) + (2 * this.altura);

	}

	public void hacerCuadrado(double lado) {
		this.base = lado;
		this.altura = lado;
	}
	
	public void dibujar() {
		for(int i=0;i<this.altura;i++) {
			for(int j = 0;j<this.base; j++){
				System.out.print("⬛");

	}
			System.out.println("")