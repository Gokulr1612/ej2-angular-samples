import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { NumericTextComponent } from './numeric-text-box.component'

const routes: Routes = [
  {
    path: '',
    component: NumericTextComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NumericTextRoutingModule { }
