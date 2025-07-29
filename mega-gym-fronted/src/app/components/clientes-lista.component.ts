import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrl: './clientes-lista.component.css',
  standalone: true,
  imports: [CommonModule]
})
export class ClientesListaComponent implements OnInit {
  clientes: any[] = [];

  constructor(private clientesService: ClientesService) {}

  ngOnInit(): void {
    this.clientesService.getClientes().subscribe(data => {
      this.clientes = data;
    });
  }
}
