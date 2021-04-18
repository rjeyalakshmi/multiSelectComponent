import { Component, OnInit } from '@angular/core';
import { CountryDropdownSettings } from './app-constants';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = "Test Application";
  isDropdownSearch = CountryDropdownSettings.isDrodpdownSearch;
  countries = CountryDropdownSettings.countries;
  filterBy = CountryDropdownSettings.searchBy;
  optionLabel = CountryDropdownSettings.optionLabel;
  optionValue = CountryDropdownSettings.optionValue;
  //Event Emitter Callback whenever checkbox is clicked.
  getSelectedCountries(item:any[]){
    console.log(item);    
  }

  ngOnInit() {

  }
}
