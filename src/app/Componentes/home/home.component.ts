import { Component } from '@angular/core';
import { CompañiaService } from '../../Services/compañia.service';
import { CommonModule } from '@angular/common';
import { Empleado } from '../../Interfaces/Empleado';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [CompañiaService]
})
export class HomeComponent {
  public titulo = "Pagina Principal"
  nombre_empleados:string[] = []

  constructor(
    private _compañiaServicie:CompañiaService,
    // private nombre_empleados:CompañiaService
  ){}

  ngOnInit(){
    this.nombre_empleados = this._compañiaServicie.Empleados()

  }

  Ingresar_Empleado(input: HTMLInputElement){
      let Empleado = input.value
      this._compañiaServicie.añadir_empleado(Empleado)
      input.value=""

  }

}
