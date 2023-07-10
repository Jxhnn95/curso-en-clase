import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.component.html',
  styleUrls: ['./lista-compra.component.css']
})
export class ListaCompraComponent implements OnInit {
  constructor(private localStorage: type localStorageService) { }
  //nombre :   tipo[] =valor[]
  productos: string[] = ['Leche', 'cereales', 'pan', 'azucar'];
  nuevoProducto: string = ''
  ngOnInit() {
    console.log(this.productos);
    const listaGuardada = this.localStorage.leer('lista compra');
    if (listaGuardada) {
      this.productos = listaGuardada;
    }

  }
  incluirProducto() {
    this.productos.push(this.nuevoProducto);
    this.nuevoProducto = '';
    this.localStorage.guardar("lista-compra,"), this.productos;
    this.nuevoProducto='';
    this.guardarLista();
  }



  vaciarLista() {
    this.localStorage.borrar('lista-compra');
    this.productos = [];
    //borrar elementos uno en uno


  }
  borrarProducto(index: number) {
    this.productos.splice(index,1);
    this.localStorage
  }

}


//local storage



import(Injectable) from '@angular/core';
@Injectable{
  {
    provideIn: 'root',
}
}
export class localStorageService(
  constructor: (){}
  GuardsCheckStart(id: string, paraGuardar: any){
  localStorage.setItem: (id, paraGuardarJSON)
};

)
leer(id: string){
  const paraLeerJSON = localStorage.getItem(id);
  if (paraLeerJSON) {
    const paraLeer = JSON.parse(paraLeerJSON);
    return paraLeer;

  } else {
    return null;
  }

}
borrar(id: string){
  localStorage.removeItem(id);

  console.log('Eliminado' + id);

}

}