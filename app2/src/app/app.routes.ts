import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { OfertaComponent } from './oferta/oferta.component';
import { OndeFicaComponent } from './onde-fica/onde-fica.component';
import { ComoUsarComponent } from './como-usar/como-usar.component';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';


export const ROUTES: Routes = [
    {path: '', component: HomeComponent },
    {path: 'restaurantes', component: RestaurantesComponent},
    {path: 'diversao', component: DiversaoComponent},
    {path: 'diversao', component: DiversaoComponent},
    {path: 'oferta', component: OfertaComponent},
    {path: 'ordem', component: OrdemCompraComponent},
    {path: 'oferta/:id', component: OfertaComponent,
        children: [
            {path: '', redirectTo:'onde-fica', pathMatch: 'full'},
            {path: 'onde-fica', component: OndeFicaComponent },
            {path: 'como-usar', component: ComoUsarComponent }
        ]
    },
]