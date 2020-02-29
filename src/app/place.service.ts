import {Injectable} from '@angular/core';
import {Place} from './place';
import {PLACES} from './mock-place';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  getPlaces(): Observable<Place[]> {
    return of(PLACES);
  }

  constructor() {
  }
}
