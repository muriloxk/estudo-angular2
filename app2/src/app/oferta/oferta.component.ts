import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'xyz-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {

  private route : ActivatedRoute;

  constructor(route : ActivatedRoute) { 
    this.route = route;
  }

  ngOnInit() {
    console.log("SnapShot ID: ", this.route.snapshot.params['id']);
  }
}
