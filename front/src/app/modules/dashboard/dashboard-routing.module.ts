import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultadosComponent } from './resultados/resultados.component';
import { TablaEncuestasComponent } from './tabla-encuestas/tabla-encuestas.component';
import { adminGuard } from 'src/app/core/guards/admin.guard';
import { loginGuard } from 'src/app/core/guards/login.guard';
import { CuestionarioTuristasComponent } from './cuestionario-turistas/cuestionario-turistas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuOpcionesComponent } from './menu-opciones/menu-opciones.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [loginGuard],
    children: [
      { path: '', component: MenuOpcionesComponent, canActivate: [loginGuard]},
      { path: 'resultados', component: ResultadosComponent, canActivate: [adminGuard] },
      { path: 'encuestas', component: TablaEncuestasComponent, canActivate: [loginGuard] },
      { path: 'cuestionario-turistas', component: CuestionarioTuristasComponent, canActivate: [loginGuard] },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
