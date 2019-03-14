import { Oferta } from '../app/shared/ofertas.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_API } from './api.config';
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
        return this.http.get(`${URL_API}/ofertas?id=${id}`).toPromise()
                        .then((resposta: Array<Oferta>) => resposta.shift());
    }
}
