import { Component } from '@angular/core';
import { loadCldr, setCulture, setCurrencyCode, L10n } from '@syncfusion/ej2-base';
import localeIndiaData from "@syncfusion/ej2-cldr-data/main/en-IN/all.json";
import enNumberingSystems from "@syncfusion/ej2-cldr-data/supplemental/numberingSystems.json";

L10n.load({
  'en-IN': {
       'numerictextbox': {
         placeholder: 'Enter value'
       }
     }
});
loadCldr(localeIndiaData, enNumberingSystems);

@Component({
  selector: 'app-numeric-text-box',
  templateUrl: './numeric-text-box.component.html',
  styleUrls: ['./numeric-text-box.component.css']
})
export class NumericTextComponent {

}
