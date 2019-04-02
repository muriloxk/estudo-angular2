import { Component, OnInit,  } from '@angular/core';
import { style, trigger, state, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('banner', [
      state('escondido', style({
        opacity: 0
      })),
      state('visivel', style({
        opacity: 1
      })),
      transition('escondido <=> visivel', animate('2s ease-in'))
    ])
  ]
})
export class BannerComponent implements OnInit {

  public estado: string = 'escondido';

  constructor() { }

  ngOnInit() {
  }

  public toggleEstado(): void {
    console.log(this.estado);
    this.estado = this.estado === 'visivel' ? 'escondido' : 'visivel';
  }

}
