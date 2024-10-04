import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { GridComponent } from './grid.component'
import { GridRoutingModule } from './grid-routing.module'
import { GridAllModule, PdfExportService, ToolbarService, PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids'

@NgModule({
  declarations: [GridComponent],
  imports: [
    CommonModule,
    GridRoutingModule,
    GridAllModule
  ],
  providers: [PageService,
    SortService,
    FilterService,
    GroupService,
    PdfExportService,
    ToolbarService]
})
export class SyncGridModule { }
