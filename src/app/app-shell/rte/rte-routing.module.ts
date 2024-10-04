import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { RteComponent } from './rte.component'

const routes: Routes = [
  {
    path: '',
    component: RteComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RteRoutingModule { }
