import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';

import { AppComponent } from './app.component';
import { CarsTableComponent } from './car-table/car-table-component/car-table.component';
import { CarService } from './car-table/service/cars.service';

@NgModule({
  declarations: [
    AppComponent,
    CarsTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    TableModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
