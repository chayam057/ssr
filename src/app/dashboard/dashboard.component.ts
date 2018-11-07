import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.try();
    this.getData(1)
    // .finally(() => console.log('getData'))
    .subscribe(res =>{
      console.log(res);
     this.heroes = res
    } );
    
  }
try() {
  console.log('try');
}
getData(counter = 25): Observable<any[]> {
  return this.http.get('https://restcountries.eu/rest/v2/all')
    .pipe(
      map((res: Array<any>) => {
        let array = [];
        Array.from({ length: counter }).map((_, i) => array = [...res, ...array]);
        return array;
      }))

}
}
