import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { EmpleadosComponent } from './Componentes/empleados/empleados.component';
import { JefesComponent } from './Componentes/jefes/jefes.component';
import { HomeComponent } from './Componentes/home/home.component';
import { ContactoComponent } from './Componentes/contacto/contacto.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, EmpleadosComponent , JefesComponent, HomeComponent , ContactoComponent, RouterModule  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'Angular_Curso';
}
