import { Routes } from '@angular/router';

//importar componentes

import { EmpleadosComponent } from './Componentes/empleados/empleados.component';
import { JefesComponent } from './Componentes/jefes/jefes.component';
import { HomeComponent } from './Componentes/home/home.component';
import { ContactoComponent } from './Componentes/contacto/contacto.component';

export const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"contacto" , component:ContactoComponent},
  {path:"contacto/:page" , component:ContactoComponent},
  {path:"home" , component:HomeComponent},
  {path:"empleados" , component:EmpleadosComponent},
  {path:"jefes", component:JefesComponent},
  {path:"**" , component:HomeComponent},
];
