import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportesComponent } from './components/sidebar/reportes/reportes.component';
import { SoftwareComponent } from './components/sidebar/software/software.component';
import { PoliticaComponent } from './components/sidebar/politica/politica.component';
import { GuiaComponent } from './components/sidebar/guia/guia.component';
import { IndexComponent } from './components/index/index.component';
import { InfraestructuraComponent } from './components/sidebar/infraestructura/infraestructura.component';
import { RouterModule } from '@angular/router';
import { routes } from "./app-routing.module";
import { FormularioComponent } from './components/formulario/formulario.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from "@angular/material/button";
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    ReportesComponent,
    SoftwareComponent,
    PoliticaComponent,
    GuiaComponent,
    IndexComponent,
    InfraestructuraComponent,
    FormularioComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true }),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule
  ],
  providers: [HttpClientModule, {
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' } 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
