import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Router, ActivatedRoute} from '@angular/router';

//importamos las librerias para las alertas personalizadas
import swal from 'sweetalert2';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

 public cliente: Cliente = new Cliente();
 public  titulo: string = "Registro cliente";

  constructor( public clienteService: ClienteService, 
               public router: Router,
               public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarCliente();  //para poder visualizar cliente
  }

  // public create():void{
  //   this.clienteService.create(this.cliente).subscribe(
  //     response => this.router.navigate(['/clientes'])
  //   )
    
  // }


  //llamamos el metodo crear
  public create():void {
    this.clienteService.create(this.cliente)
    .subscribe( cliente => {
     this.router.navigate(['/clientes'])
     swal.fire('nuevo cliente', `Cliente ${cliente.nombre} creado con exito`, 'success')
  }
);
}


//lamamos al metodo cargarCliente y dentro llamamos el metodo getCliente
cargarCliente(): void{
  this.activatedRoute.params.subscribe(params => {
    let id = params['id']
    if(id){
      this.clienteService.getCliente(id).subscribe( (cliente) => this.cliente = cliente)
    }
  })
}





}
