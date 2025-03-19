import { Component, ViewChild } from '@angular/core';
import { PdfViewerModule, LinkAnnotationService, BookmarkViewService,
  MagnificationService, ThumbnailViewService, ToolbarService,
  NavigationService, TextSearchService, TextSelectionService,
  PrintService, FormDesignerService, FormFieldsService, 
  AnnotationService, PageOrganizerService, PdfViewerComponent as SyncPDF } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css'],
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
    ThumbnailViewService, ToolbarService, NavigationService,
    TextSearchService, TextSelectionService, PrintService,
    AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService]
})
export class PdfViewerComponent {

  @ViewChild('pdfviewer')
  public pdfviewerControl?: SyncPDF | any;

  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string = "https://cdn.syncfusion.com/ej2/26.2.11/dist/ej2-pdfviewer-lib";

  public toolSettings = {
    showTooltip: false,
    toolbarItems: ['OpenOption', 'SearchOption', 'PrintOption'],
  };

  onclick() {
    var toolbarSettingsNew = this.pdfviewerControl?.toolbarSettings;
    if (toolbarSettingsNew.toolbarItems.indexOf('DownloadOption') == -1) {
      toolbarSettingsNew.toolbarItems.push('DownloadOption');
    }

    this.pdfviewerControl.enableDownload = true;
    this.pdfviewerControl.toolbarSettings = toolbarSettingsNew;
    this.pdfviewerControl.toolbarModule.updateToolbarItems();
  }
  
}
