import { Component } from '@angular/core';
import { Empleado } from '../../Interfaces/Empleado';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.scss'
})
export class EmpleadosComponent {

  constructor(){
    this.empleado = "Juan Manuel"
    this.Mostrar = true
    this.Numeros = [1,2,3,4,5]
    this.Empleados =[
      {id:12, nombre:"juan", activo:true },
      {id:15, nombre:"carlos", activo:false},
      {id:18,nombre:"Stella"}]
  }




  ngOnInit(){
    console.log(this.Empleados[0])

  }

  Empleados : Array<Empleado>
  empleado : string
  Mostrar : boolean = true
  Numeros:Array<number>

  activo(){
    this.Mostrar ? this.Mostrar = false : this.Mostrar = true
  }


}
