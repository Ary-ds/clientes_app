import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';
import { ClienteService } from './cliente.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes?: Cliente[];

  //inyecion de dependecia clienteservice
  constructor( private clienteService: ClienteService) { }

  ngOnInit(): void {
    // this.clientes = CLIENTES;
    // this.clientes = this.clienteService.getClientes();   //ver todos los clientes
       this.clienteService.getClientes().subscribe(
         clientes => this.clientes = clientes
       );
  }


  //metodo para eliminar
  delete(cliente: Cliente): void {
    console.log(cliente);
     
Swal.fire({
  title: 'estas seguro?',
  text: "seguro que deseas eliminar el cliente!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'si, eliminalo!'
}).then((result) => {
  if (result.isConfirmed) {
    
    this.clienteService.delete(cliente.id).subscribe(
      response => {
        this.clientes = this.clientes?.filter(cli => cli !== cliente)
        Swal.fire(
          'Cliente Eliminado!',
          `Cliente ${cliente.nombre} eliminado con éxito.`,
          'success'
        )
      }
    )
  }
})

  }
}
