import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private apiUrl = 'http://localhost:3000/api/clientes'; // Cambia el puerto/url si tu backend usa otro

  constructor(private http: HttpClient) {}

  getClientes(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Puedes agregar más métodos para POST, PUT, DELETE, etc.
}