import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { GuiaComponent } from './components/sidebar/guia/guia.component';
import { IndexComponent } from './components/index/index.component';
import { InfraestructuraComponent } from './components/sidebar/infraestructura/infraestructura.component';
import { PoliticaComponent } from './components/sidebar/politica/politica.component';
import { SoftwareComponent } from './components/sidebar/software/software.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ReportesComponent } from './components/sidebar/reportes/reportes.component';

export const routes: Routes = [
  { path: 'index', component: IndexComponent },
  {
    path: 'datos', component: SidebarComponent,
    children: [
      { path: 'infraestructura', component: InfraestructuraComponent },
      { path: 'politica', component: PoliticaComponent },
      { path: 'guia', component: GuiaComponent },
      { path: 'software', component: SoftwareComponent },
      { path: 'reportes', component: ReportesComponent },
    ]
  },
  { path: 'registro', component: FormularioComponent },
  { path: '', pathMatch: 'full', redirectTo: 'index' },
  { path: '**', pathMatch: 'full', redirectTo: 'index' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
