
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';


//para pode trabajar con el http
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
  
  
  
})
export class ClienteService {
  
  //creamos el url el endpoint 
  private urlEndPoint: string = 'http://localhost:8080/api/clientes';

  private httpHeaders = new HttpHeaders ({'Content-Type': 'application/json'});


  //inyectamos el httpclient en el construtor
  constructor( private http: HttpClient) { }



  // ---------- METODOS SE HACE LA LLAMADA EN EL COMPONENT 

  //para ver el listado 
 getClientes(): Observable<Cliente[]> {
  // return of(CLIENTES);
     return this.http.get<Cliente[]>(this.urlEndPoint);
 }


 //implementamos el metodo crearCliente
 create(cliente: Cliente): Observable<Cliente> {
   return this.http.post<Cliente>(this.urlEndPoint, cliente, {headers: this.httpHeaders});
 }

 //implementamos el metodo actualizar cliente
   getCliente(id: any): Observable<Cliente> {
   return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`)
 }

 




}
