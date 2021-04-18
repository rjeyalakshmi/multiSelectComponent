import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'multiSelect',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css']
})
export class MultiSelectComponent implements OnInit {
  @Input() options : any[]; //Options to be displayed in the multi select dropdown
  @Input() allowSearch : Boolean; //Boolean value to display the search box
  @Input() searchBy : string; //Search by label or value
  @Input() optionLabel : string; //Specifies which key indicates the label of the option in dropdown
  @Input() optionValue : string; //Specifies which key indicates the value of the option in dropdown
  @Output() onChanged = new EventEmitter<any[]>();
  selectedOptions : any[];
  showDropDown = false;
  searchTerm : string = "";
  filteredOptions : any[];
  constructor() {  
    this.selectedOptions = [];  
  }
  getSelectedOptions (event, val:string) {
    if (event.target.checked) {
      this.selectedOptions.push(val);
    } else {
      var index = this.selectedOptions.indexOf(val);
      this.selectedOptions.splice(index, 1);
    }
    this.onChanged.emit(this.selectedOptions);
  }
  clearSearchTerm() {
    this.searchTerm = "";
  }
  closeDropDown() {
    this.showDropDown = false;
  }
  ngOnInit() {
    console.log(this.searchBy);
    for (let i in this.options) {
      console.log(this.options[i][this.searchBy]);
    }
  }
 

}
