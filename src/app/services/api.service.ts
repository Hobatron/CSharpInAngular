import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Driver } from '../models/driver.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  public get(): Observable<Driver[]> {
    return of([
      {
        x: 1,
        y: 2,
        total: 3
      } as Driver
    ])
  }

  public post(body: Driver[]) {
    console.log('Sending api request with body: ', body);
  }
}
