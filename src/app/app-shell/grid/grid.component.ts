import { Component, OnInit, ViewChild } from '@angular/core'
import { data, customerData, base64CustomFont } from './datasource'
import { PageSettingsModel, ToolbarItems, PdfExport, PdfExportProperties, GridComponent as Grid, RowDataBoundEventArgs, BeforeDataBoundArgs } from '@syncfusion/ej2-angular-grids'
import { ClickEventArgs } from '@syncfusion/ej2-navigations'

import { PdfTrueTypeFont } from '@syncfusion/ej2-pdf-export'

@Component({
  selector: 'app-blank',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  constructor () {}
  public data!: Object[]
  public pageSettings!: PageSettingsModel
  public toolbarItems!: ToolbarItems[]

  @ViewChild('grid')
  public gridInstance!: Grid

  ngOnInit () {
    this.data = customerData
    this.pageSettings = { pageSize: 6 }
    this.toolbarItems = ['PdfExport']
  }

  public toolbarClickHandler (args: ClickEventArgs) {
    if (args.item.text === 'PDF Export') {
      const pdfExportProperties: PdfExportProperties = {
        theme: {
          header: {
            font: new PdfTrueTypeFont(base64CustomFont, 12),
            fontColor: '#000080',
            bold: true,
            border: { color: '#5A5A5A', dashStyle: 'Solid' }
          },
          caption: {
            font: new PdfTrueTypeFont(base64CustomFont, 10),
            fontColor: '#0B6623',
            bold: true
          },
          record: {
            font: new PdfTrueTypeFont(base64CustomFont, 9),
            fontColor: '#B22222',
            bold: true
          }
        }
      }
      debugger
      this.gridInstance.pdfExport(pdfExportProperties)
    }
  }

  loadEventHandler(){
    console.log('load event')
  }

  createdHandler(){
    console.log('created event')
  }

  rowDataBoundHandler(args: RowDataBoundEventArgs){
    console.log('row data bound')

  }

  dataBoundHandler(args: BeforeDataBoundArgs){
    console.log('data bound ')
  }
}
