import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfViewerComponent } from './pdf-viewer.component';
import { PdfViewerAllModule } from '@syncfusion/ej2-angular-pdfviewer';
import { PdfViewerRoutingModule } from './pdf-viewer.routing.module';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'


@NgModule({
  declarations: [PdfViewerComponent],
  imports: [
    CommonModule,
    PdfViewerAllModule,
    PdfViewerRoutingModule,
    ButtonModule
    
  ],
  providers: []
})
export class SyncPdfViewerModule { }
