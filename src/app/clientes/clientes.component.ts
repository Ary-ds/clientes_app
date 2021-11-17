import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';
import { ClienteService } from './cliente.service';



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
    // this.clientes = this.clienteService.getClientes();
       this.clienteService.getClientes().subscribe(
         clientes => this.clientes = clientes
       );
  }

}
