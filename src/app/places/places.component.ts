import {Component, OnInit} from '@angular/core';

import {Place} from '../place';
import {PlaceService} from '../place.service';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  places: Place[];

  selectedPlace: Place;

  constructor(private placeService: PlaceService, private messageService: MessageService) {
  }

  ngOnInit() {
    this.getPlaces();
  }

  onSelect(place: Place): void {
    this.selectedPlace = place;
    this.messageService.add(`PlaceService: Selected place id=${place.id}`);
  }

  getPlaces(): void {
    this.placeService.getPlaces()
      .subscribe(places => this.places = places);
  }
}
