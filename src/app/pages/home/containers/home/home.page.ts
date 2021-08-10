import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Bookmark } from 'src/app/shared/models/bookmark.models';
import { CityWeather } from 'src/app/shared/models/weather.model';

import * as fromHomeActions from '../../state/home.actions'
import * as fromHomeSelectors from '../../state/home.selectors'

@Component({
  selector: 'jv-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit, OnDestroy {


  cityweather: CityWeather;
  loading$: Observable<boolean>;
  error$: Observable<boolean>;
  searchControl: FormControl;
  text:string;
  private componentDestroyed$ = new Subject();

  constructor(private store:Store) { }

  ngOnInit(): void {
    this.searchControl = new FormControl('', Validators.required);

    this.store
      .pipe(
        select(fromHomeSelectors.selectCurrentWeather),
        takeUntil(this.componentDestroyed$),
        )
      .subscribe(value => this.cityweather = value);
    this.loading$ = this.store.pipe(select(fromHomeSelectors.selectCurrentWeatherLoading));
    this.error$ = this.store.pipe(select(fromHomeSelectors.selectCurrentWeatherError));
  }

  ngOnDestroy(){
    this.componentDestroyed$.next();
    this.componentDestroyed$.unsubscribe();
  }

  doSearch(){
    const query = this.searchControl.value;
    this.store.dispatch(fromHomeActions.loadCurrentWeather({query}));
  }

  onToggleBookmark(){
    const bookmark = new Bookmark();
    bookmark.id = this.cityweather.city.id;
    bookmark.name = this.cityweather.city.name;
    bookmark.country = this.cityweather.city.country;
    bookmark.coord = this.cityweather.city.coord;
  }
}
