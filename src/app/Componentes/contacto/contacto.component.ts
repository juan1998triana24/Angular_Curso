import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router , ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent {
  public titulo_contacto = " Pagina de la contactado de la WEB "
  public parametro : string ="";

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ){}

  ngOnInit(){
    this._route.params.forEach((params:Params) => {
      this.parametro = params['page']
    })
  }


  redirigir_parametro_contacto(){
      this._router.navigate(["/contacto","Juan Manuel triana"])
  }

  redirigir_parametro_home(){
    this._router.navigate(["/home"])
}



}
