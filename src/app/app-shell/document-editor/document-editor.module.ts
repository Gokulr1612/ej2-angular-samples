import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { DocumentEditorContainerModule, ToolbarService } from '@syncfusion/ej2-angular-documenteditor'

import { DocumentEditorComponent } from './document-editor.component'

import { DocumentEditorRoutingModule } from './document-editor-routing.module'

@NgModule({
  declarations: [DocumentEditorComponent],
  imports: [
    CommonModule,
    DocumentEditorRoutingModule,
    DocumentEditorContainerModule
  ],
  providers: [ToolbarService]
})
export class SyncDocumentEditorModule { }
