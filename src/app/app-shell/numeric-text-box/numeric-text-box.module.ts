import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumericTextComponent } from './numeric-text-box.component';
import { NumericTextRoutingModule } from './numeric-text-box.routing.module';
import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';

@NgModule({
  declarations: [NumericTextComponent],
  imports: [
    CommonModule,
    NumericTextRoutingModule,
    NumericTextBoxAllModule
    
  ],
  providers: []
})
export class SyncNumericTextModule { }
