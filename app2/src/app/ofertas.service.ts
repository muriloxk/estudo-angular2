import { Oferta } from '../app/shared/ofertas.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_API } from './api.config';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry, retryWhen, delay, take } from 'rxjs/operators';
import 'rxjs';

@Injectable()
export class OfertasService {

    constructor(private http: HttpClient) { }

    public getOfertas(): Promise<Array<Oferta>> {
        return this.http.get<Array<Oferta>>(`${URL_API}/ofertas`)
                        .toPromise<Array<Oferta>>();
    }

    public getOfertaPorCategoria(categoria: string): Promise<Array<Oferta>> {
        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
                        .toPromise()
                        .then((resposta: any) => resposta);
    }

    public getOfertaPorID(id: number): Promise<Oferta> {
        return this.http.get(`${URL_API}/ofertas?id=${id}`)
                        .toPromise()
                        .then((resposta: Array<Oferta>) => resposta.shift());
    }

    public getComoUsarPorID(id: number): Promise<string> {
        return this.http.get(`${URL_API}/como-usar?id=${id}`)
                        .toPromise()
                        .then((resposta: any) => {
           return resposta.shift().descricao;
        });
    }

    public getOndeFicaPorID(id: number): Promise<string> {
        return this.http.get(`${URL_API}/onde-fica?id=${id}`).toPromise().then((resposta: any) => {
            return resposta.shift().descricao;
        });
    }

    public pesquisaOferta(termo: string): Observable<Oferta[]> {
        return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
                        .pipe(
                            map((resposta: Array<Oferta>) => resposta),
                            retryWhen(errors => errors.pipe(delay(1000), take(10)))
                        );
    }
}
