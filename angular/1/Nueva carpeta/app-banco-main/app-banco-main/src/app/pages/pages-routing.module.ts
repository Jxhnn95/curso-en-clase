import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransferenciasRecibidasComponent } from './transferencias-recibidas/transferencias-recibidas.component';
import { TransferenciasEnviadasComponent } from './transferencias-enviadas/transferencias-enviadas.component';
import { DetalleTransferenciaComponent } from './detalle-transferencia/detalle-transferencia.component';
import { MyAcountComponent } from './my-acount/my-acount.component';
import { NewTransferComponent } from './new-transfer/new-transfer.component';
import { TransferComponent } from './transfer/transfer.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'transferencias-recibidas',
    component: TransferenciasRecibidasComponent,
  },
  {
    path: 'transferencias-enviadas',
    component: TransferenciasEnviadasComponent,
  },
  {
    path: 'detalle-transferencia',
    component: DetalleTransferenciaComponent,
  },
  {
    path: 'my-acount',
    component: MyAcountComponent,
  },
  {
    path: 'new-transfer',
    component: NewTransferComponent,
  },
  {
    path: 'transfer',
    component: TransferComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
