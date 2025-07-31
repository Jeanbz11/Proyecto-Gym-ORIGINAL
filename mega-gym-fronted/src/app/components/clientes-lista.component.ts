import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrl: './clientes-lista.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ClientesListaComponent implements OnInit {
  clientes: any[] = [];
  nuevoCliente = { nombre: '', correo: '', telefono: '' };

  constructor(private clientesService: ClientesService) {}

  ngOnInit(): void {
    this.clientesService.getClientes().subscribe(data => {
      this.clientes = data;
    });
  }

  registrarCliente() {
    this.clientesService.createCliente(this.nuevoCliente).subscribe({
      next: (res) => {
        alert('Cliente registrado');
        this.nuevoCliente = { nombre: '', correo: '', telefono: '' };
        this.ngOnInit();
      },
      error: (err) => {
        alert('Error al registrar cliente');
      }
    });
  }
}
