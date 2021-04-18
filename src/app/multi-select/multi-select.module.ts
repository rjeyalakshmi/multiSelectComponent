import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MultiSelectComponent } from './multi-select.component';
import {MultiSelectFilterPipe} from './multi-select-filter.pipe';
@NgModule({
  declarations: [MultiSelectComponent, MultiSelectFilterPipe],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MultiSelectComponent
  ]
})
export class MultiSelectModule implements OnInit {
  ngOnInit() {
    console.log("inside module")
  }
 }
