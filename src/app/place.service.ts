import {Injectable} from '@angular/core';
import {Place} from './place';
import {PLACES} from './mock-place';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  getPlaces(): Observable<Place[]> {
    this.messageService.add('PlaceService: fetched places');
    return of(PLACES);
  }

  constructor(private messageService: MessageService) {
  }
}
