import {Component, OnInit} from '@angular/core';
import {Place} from '../place';
import {PlaceService} from '../place.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  places: Place[];

  selectedPlace: Place;

  onSelect(place: Place): void {
    this.selectedPlace = place;
  }

  constructor(private placeService: PlaceService) {
  }

  getPlaces(): void {
    this.placeService.getPlaces()
      .subscribe(places => this.places = places);
  }

  ngOnInit() {
    this.getPlaces();
  }

}
