import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Persona } from '../../models/persona';

/*
  Generated class for the PeopleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PeopleProvider {
  private url = 'https://randomuser.me/api/?results=100';
  constructor(public http: HttpClient) {
    console.log('Hello PeopleProvider Provider');
  }
  getRandomUsers(): Observable<Persona> {
    return this.http.get<Persona>(this.url);
  }

}
