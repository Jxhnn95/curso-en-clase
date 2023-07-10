//definir rutas
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiListaComponent } from './pages/mi-lista/mi-lista.component';
//nueva lista importada<
import { MiNuevaListaComponent } from './pages/mi-lista/nueva-lista.component';

const routes: Routes = [
  {
    path: 'mi-lista',
    component: MiListaComponent,
  },
  {
    path: 'nueva-lista',
    component: MiNuevaListaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
