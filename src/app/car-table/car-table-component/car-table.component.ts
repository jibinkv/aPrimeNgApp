import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { Car } from '../model/car.model';
import { CarService } from '../service/cars.service';

@Component({
  selector: 'car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class CarsTableComponent implements OnInit {
	cars: Car[];

	totalRecords: number;

    cols: any[];

    frozenCars: Car[];

    frozenCols: any[];

    scrollableCols: any[];
    
	constructor(private carService: CarService) { }

    ngOnInit() {
        this.carService.getCars().then(cars => this.cars = cars);

        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];

        this.scrollableCols = [
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];

        this.frozenCols = [
            { field: 'vin', header: 'Vin' },
        ];

        this.frozenCars = [
            { "brand": "BMW", "year": 2013, "color": "Grey", "vin": "fh2uf23" },
            { "brand": "Chevrolet", "year": 2011, "color": "Black", "vin": "4525g23" }
        ];

        this.colsToMatch = [
            { field: 'vin', header: 'Vin' }
        ];

        this.cols1 = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];

        this.cols1 = this.cols1.filter((col) => {
            return this.colsToMatch.every(col1 => {
                return col1.field !== col.field;
            });
        });

        console.log(this.cols1);

    }
}