import {Injectable} from '@angular/core';
import {Place} from './place';
import {PLACES} from './mock-place';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  constructor(private messageService: MessageService) {
  }

  getPlaces(): Observable<Place[]> {
    this.messageService.add('PlaceService: fetched places');
    return of(PLACES);
  }

  getPlace(id: number): Observable<Place> {
    this.messageService.add(`PlaceService: fetched place id=${id}`);
    return of(PLACES.find(place => place.id === id));
  }

}
