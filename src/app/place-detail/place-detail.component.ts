import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {PlaceService} from '../place.service';
import {Place} from '../place';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css']
})
export class PlaceDetailComponent implements OnInit {
  place: Place;

  constructor(
    private route: ActivatedRoute,
    private heroService: PlaceService,
    private location: Location
  ) {
  }

  ngOnInit() {
    this.getPlace();
  }

  getPlace(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getPlace(id)
      .subscribe(place => this.place = place);
  }

  goBack(): void {
    this.location.back();
  }
}
