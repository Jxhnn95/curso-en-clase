import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaCompraComponent } from './components/lista-compra/lista-compra.component';
import { MiListaComponent } from './pages/mi-lista/mi-lista.component';
import { NuevaListaComponent } from './pages/nueva-lista/nueva-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCompraComponent,
    MiListaComponent,
    NuevaListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
