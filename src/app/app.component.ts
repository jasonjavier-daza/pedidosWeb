import { Component, OnInit } from '@angular/core';
import { PedidosModel } from './models/pedido.model'
import { NgForm } from '@angular/forms'
import { AuthService } from './services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pedido: PedidosModel;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.pedido = new PedidosModel();
  }

  onSubmit(form: NgForm) {
    console.log(form);
    if(form.invalid){
      alert("Los campos son obligatorios");
      return;
    }
    if (this.pedido.cantidad <= 0 || this.pedido.precio <= 0) {
      alert("La cantidad y el precio debe ser mayor a 0");
      return;
    }
    if (this.pedido.cantidad > 5) {
      this.pedido.precio = this.pedido.precio - (this.pedido.precio * 10 / 100);
      alert("se ha aplicado descuento del 10%, el valor apagar ahora es " + this.pedido.precio);
    }
    this.auth.nuevoPedido(this.pedido).subscribe(data => {
      console.log(data);
      alert("El pedido se ha generado exitosamente");
    })

  }

}