import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Car } from '../model/car.model';

@Injectable()
export class CarService {

    constructor(private http: HttpClient) { }

    getCars() {
    return this.http.get<any>('assets/data/cars.json')
      .toPromise()
      .then(res => <Car[]>res.data)
      .then(data => { return data; });
    }
}