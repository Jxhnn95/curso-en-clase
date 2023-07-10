import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { TransferenciasRecibidasComponent } from './transferencias-recibidas/transferencias-recibidas.component';
import { TransferenciasEnviadasComponent } from './transferencias-enviadas/transferencias-enviadas.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { TransferComponent } from './transfer/transfer.component';
import { MyAcountComponent } from './my-acount/my-acount.component';
import { NewTransferComponent } from './new-transfer/new-transfer.component';
import { DetalleTransferenciaComponent } from './detalle-transferencia/detalle-transferencia.component';

@NgModule({
  declarations: [
    DashboardComponent,
    TransferenciasRecibidasComponent,
    TransferenciasEnviadasComponent,
    TransferComponent,
    MyAcountComponent,
    NewTransferComponent,
    DetalleTransferenciaComponent,
  ],
  imports: [CommonModule, PagesRoutingModule, FormsModule, ComponentesModule],
})
export class PagesModule {}
