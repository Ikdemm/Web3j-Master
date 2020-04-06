import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonotoringComponent } from './monotoring.component';
import { MonotoringRoutingModule } from './monotring-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatTableModule,MatPaginatorModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MonotoringRoutingModule,
    NgbModule.forRoot(),
    MatTableModule,
    MatPaginatorModule
  ],
  declarations: [MonotoringComponent]
})
export class MonotoringModule { }
