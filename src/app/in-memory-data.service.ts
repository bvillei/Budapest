import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Place } from './place';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const places = [
      { id: 1, name: 'Parliament', description: 'Most famous in Budapest'},
      { id: 2, name: 'Castle', description: 'Beautiful view to the city' },
      { id: 3, name: 'Basilica' , description: 'Inside amazing as well'},
    ];
    return {places};
  }

  // Overrides the genId method to ensure that a place always has an id.
  // If the places array is empty,
  // the method below returns the initial number (11).
  // if the places array is not empty, the method below returns the highest
  // place id + 1.
  genId(places: Place[]): number {
    return places.length > 0 ? Math.max(...places.map(place => place.id)) + 1 : 11;
  }
}
