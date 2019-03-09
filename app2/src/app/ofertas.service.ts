import { Oferta } from '../app/shared/ofertas.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs';

@Injectable()
export class OfertasService {

    constructor(private http: HttpClient) { }

    public getOfertas() : Promise<Array<Oferta>> {
        return this.http.get<Array<Oferta>>("http://localhost:3000/ofertas")
                        .toPromise<Array<Oferta>>();
    }

    public getOfertaPorCategoria(categoria : string) : Promise<Array<Oferta>> {
        return this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`)
                        .toPromise()
                        .then((resposta: any) => resposta);
    }

}