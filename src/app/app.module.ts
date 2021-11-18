import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';

import { ClienteService } from './clientes/cliente.service';

//importamos las clases
import { RouterModule, Routes } from '@angular/router';

//importamos para poder utilizar en la clase service
import {HttpClientModule} from '@angular/common/http';

//importamos el modulo form
import { FormsModule } from '@angular/forms';
import { FormComponent } from './clientes/form.component';






//creamos la constante de las routas
const routes: Routes = [

  {path: '', redirectTo: '/clientes', pathMatch: 'full'},
  {path: 'clientes', component: ClientesComponent},
  {path: 'clientes/form', component: FormComponent},
  {path: 'clientes/form/:id', component: FormComponent}
 

];



@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    FormComponent,
  
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
