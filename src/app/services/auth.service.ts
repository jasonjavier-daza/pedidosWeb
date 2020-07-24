import { HttpClientModule } from  '@angular/common/http'

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PedidosModel } from '../models/pedido.model';
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private url = 'http://localhost:8080';
    constructor(private http: HttpClient) {}

nuevoPedido(pedido: PedidosModel){
    const data ={
        tipo: pedido.tipo,
        cantidad: pedido.cantidad,
        precio: pedido.precio
    }

    return this.http.post(`${this.url}/pedido`, data);
}

}
