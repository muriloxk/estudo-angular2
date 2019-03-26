import { Injectable } from '@angular/core';
import { HttpClient,  RequestOptions } from '@angular/common/http';
import { URL_API } from './api.config';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pedido } from './shared/pedido.model';


@Injectable()
export class OrdemCompraService {

    constructor(private http: HttpClient) { }

    public efetivarCompra(pedido: Pedido): Observable<Number> {
        let headers: Headers = new Headers();

        headers.append('Content-type', 'application/json');

        return this.http.post(
            `${URL_API}/pedidos`,
            JSON.stringify(pedido)
        )
        .pipe(map((resposta: any) => resposta.id ));
    }
}