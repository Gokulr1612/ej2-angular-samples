import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { RteComponent } from './rte.component'

// Imported Syncfusion RichTextEditorModule from Rich Text Editor package
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor'
import { ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService } from '@syncfusion/ej2-angular-richtexteditor'

import { RteRoutingModule } from './rte-routing.module'

@NgModule({
  declarations: [RteComponent],
  imports: [
    CommonModule,
    RteRoutingModule,
    RichTextEditorModule
  ],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService]
})
export class SyncRteModule { }
