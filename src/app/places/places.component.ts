import { Component, OnInit } from '@angular/core';
import { Place } from '../place';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  place: Place = {
    id: 1,
    name: 'Castle'
  };

  constructor() { }

  ngOnInit() {
  }

}
