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
        name: "test data1",
        unit: "$",
        behavior: "Sum"
      } as Driver,
      {
        name: "test data2",
        unit: "$",
        behavior: "Balance"
      } as Driver,
      {
        name: "test data3",
        unit: "%",
        behavior: "Average"
      } as Driver
    ])
  }

  public post(body: Driver[]) {
    console.log('Sending api request with body: ', body);
  }
}
