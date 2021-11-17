
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';


//para pode trabajar con el http
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
  
  
  
})
export class ClienteService {
  
  //creamos el url el endpoint 
  private urlEndPoint: string = 'http://localhost:8080/api/clientes';


  //inyectamos el httpclient en el construtor
  constructor( private http: HttpClient) { }

 getClientes(): Observable<Cliente[]> {
  // return of(CLIENTES);
     return this.http.get<Cliente[]>(this.urlEndPoint);
 }

}
