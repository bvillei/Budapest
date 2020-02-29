import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';

import {Place} from './place';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  private placesUrl = 'api/places';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
  }

  getPlaces(): Observable<Place[]> {
    return this.http.get<Place[]>(this.placesUrl)
      .pipe(
        tap(_ => this.log('fetched places')),
        catchError(this.handleError<Place[]>('getPlaces', []))
      );
  }

  getPlace(id: number): Observable<Place> {
    const url = `${this.placesUrl}/${id}`;
    return this.http.get<Place>(url).pipe(
      tap(_ => this.log(`fetched place id=${id}`)),
      catchError(this.handleError<Place>(`getPlace id=${id}`))
    );
  }

  /* GET places whose name contains search term */
  searchPlaces(term: string): Observable<Place[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Place[]>(`${this.placesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found places matching "${term}"`) :
        this.log(`no places matching "${term}"`)),
      catchError(this.handleError<Place[]>('searchPlaces', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`PlaceService: ${message}`);
  }
}
