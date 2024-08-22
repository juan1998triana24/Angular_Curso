import { Injectable } from '@angular/core';
import { Empleado } from '../Interfaces/Empleado';

@Injectable({
  providedIn: 'root'
})
export class CompañiaService {

    public nombre_empleado = "Victor Triana"

     public Nombre_Empleados: string[] = ['victor','stella'];

  Empleados(){
    return this.Nombre_Empleados
  }

  añadir_empleado(Empleado:string){
    Empleado ? this.Nombre_Empleados.push(Empleado) : null ;
    return this.Nombre_Empleados
  }
  constructor() { }
}
