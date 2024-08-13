import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FrutasComponent } from './Componentes/Frutas/frutas.component';
import { VerdurasComponent } from './Componentes/Verduras/verduras.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FrutasComponent,VerdurasComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular_Curso';
}
