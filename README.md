### This is sample application which demonstrates the multi select dropdown component

# Simple Angular Multi select dropdown

Angular Multi select dropdown component for web applications. Easy to integrate and use.

# Getting Started
# Features
- dropdown with multiple selction option.
- bind to any custom JSON object just by specifiying the keys for both label and value.
- search by either label or value.

### Installation

Run the below command to install the component
npm install mysimple-multi-select

And then include it in your module file as below.

```ts
import { MultiSelectModule } from 'mysimple-multi-select';
// ...

@NgModule({
  imports: [
    MultiSelectModule
    // ...
  ]
  // ...
})
```

### Usage

```ts
import { Component, OnInit } from '@angular/core';
export class AppComponent implements OnInit{
  isDropdownSearch = true; //Boolean value to enable/disable the search in multiselect dropdown.
  //Sample data to be bound to the dropdown.
  countries : any[] = [
    {"label": "Afghanistan", "value": "AF"}, 
     {"label": "land Islands", "value": "AX"}, 
     {"label": "Albania", "value": "AL"}, 
     {"label": "Algeria", "value": "DZ"}, 
     {"label": "American Samoa", "value": "AS"}, 
     {"label": "AndorrA", "value": "AD"}, 
     {"label": "Angola", "value": "AO"}, 
     {"label": "Anguilla", "value": "AI"}, 
     {"label": "Antarctica", "value": "AQ"}, 
     {"label": "Antigua and Barbuda", "value": "AG"}];
     filterBy: string = "label"; //filterBy option will decide whether search can be performed by either label or value.
     optionLabel: string = "label"; //Key which indicates the label of an option.
     optionValue: string = "value"; //Key which indicates the value of an option.
}
```
```html
<multiSelect [options]="countries" 
(onChanged)="getSelectedCountries($event)" 
[allowSearch]="isDropdownSearch" 
[searchBy]="filterBy"
[optionLabel]="optionLabel"
[optionValue]="optionValue" ></multiSelect>
```

### Settings

| Setting                        | Type       | Description                                                                             | 
| :----------------------------- | :--------- | :---------------------------------------------------------------------------------------|
| options                		 | Array<any> | An array of objects to display as the available                                         |                                                                                                                                            
| allowSearch                    | Boolean    | Text to be show in the dropdown, when no items are selected.                            |
| searchBy						 | String     | This will decide whether search can be performed by either label or value.              |
| optionLabel                    | String     | Key which indicates the label of an option.                                             |
| optionValue                    | String     | Key which indicates the value of an option.

### Callback Methods
- `onChanged` - Return the selected item when an item is checked.
  Example : (onChanged)="getSelectedCountries($event)"                                                                                                                                                                                                                 