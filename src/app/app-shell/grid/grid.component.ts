import { Component, OnInit, ViewChild } from '@angular/core'
import { detailedChatInfo } from './agent-report';
import { PageSettingsModel, ToolbarItems, PdfExport, PdfExportProperties, GridComponent as Grid, RowDataBoundEventArgs, BeforeDataBoundArgs } from '@syncfusion/ej2-angular-grids'
import { ClickEventArgs } from '@syncfusion/ej2-navigations'
import { GroupSettingsModel, ReturnType } from '@syncfusion/ej2-grids';
import { PdfTrueTypeFont } from '@syncfusion/ej2-pdf-export'
import { Time } from '@angular/common';
import { base64CustomFont } from './datasource';
import { Tooltip } from '@syncfusion/ej2-popups';
import { detailedChatInfo as weekData } from './syncfusion-agent-report-2025-03-18-week';
import { detailedChatInfo as mar2ndWeekData } from './syncfusion-agent-report-2025-03-19';
@Component({
  selector: 'app-blank',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  constructor() { }
  public data!: Object[]
  public pageSettings!: PageSettingsModel
  public toolbarItems!: ToolbarItems[]
  public formatoptions!: Object;
  public groupOptions?: GroupSettingsModel;
  public aggregates!: Object[];
  // In your component class
  public dateFormatOptions = { type: 'date', skeleton: 'yMEd' };


  @ViewChild('grid')
  public gridInstance!: Grid

  ngOnInit() {
    this.data = mar2ndWeekData;
    this.pageSettings = { pageSize: 50 }
    this.toolbarItems = ['PdfExport']
    this.formatoptions = { type: 'time', };
    this.groupOptions = { columns: ['Agent'] };
    this.aggregates = [
      {
        columns: [
          {
            type: 'Custom',
            field: 'TimeSpent',
            columnName: 'TimeSpent',
            groupFooterTemplate: 'Time Spent in Hours: ${Custom}',
            customAggregate: this.customAggregateFn.bind(this)
          },
        ],
      },
    ];
  }

  public customAggregateFn = (customData: any) => {
    // Check if we have data
    if (customData && customData.items) {
      // If result is an array, we need to iterate through it
      if (Array.isArray(customData.items)) {
        let totalMinutes = 0;

        // Iterate through each item in the result array
        for (const rawItem of customData.items) {
          const item = rawItem as ItemType;
          // Check if the item has a timeSpent field
          if (item && item.TimeSpent) {
            if (typeof item.TimeSpent === 'string') {
              // Parse time string (HH:MM:SS) to minutes
              const timeParts = item.TimeSpent.split(':');
              if (timeParts.length === 3) {
                const hours = parseInt(timeParts[0], 10);
                const minutes = parseInt(timeParts[1], 10);
                totalMinutes += hours * 60 + minutes;
              }
            } else if (typeof item.TimeSpent === 'number') {
              // If timeSpent is already in minutes, add it directly
              totalMinutes += item.TimeSpent;
            }
          }
        }

        // Format the total as hours
        const hours = Math.floor(totalMinutes / 60);
        const remainingMinutes = totalMinutes % 60;

        // Format as "X hrs" or "X.Y hrs" if there are remaining minutes
        if (remainingMinutes === 0) {
          return `${hours} hrs`;
        } else {
          // Round to 1 decimal place for partial hours
          const decimalHours = Math.round((hours + remainingMinutes / 60) * 10) / 10;
          return `${decimalHours} hrs`;
        }
      }
    }
    return '0 hrs';
  }

  public toolbarClickHandler(args: ClickEventArgs) {
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
      this.gridInstance.pdfExport(pdfExportProperties)
    }
  }

  loadEventHandler() {
    console.log('load event')
  }

  createdHandler() {
    console.log('created event')
  }

  rowDataBoundHandler(args: RowDataBoundEventArgs) {
    console.log('row data bound')

  }

  dataBoundHandler(args: BeforeDataBoundArgs) {
    console.log('data bound ', args)
    // var aggregateTemplateCell = (this.gridInstance.aggregateModule as any).footerRenderer.contentTable.querySelectorAll('.e-templatecell');
    var templateCells = (this.gridInstance.contentModule as any).contentTable.querySelectorAll('.e-templatecell');
    var i = 0;
    while (i < templateCells.length) {
      const tooltip: Tooltip = new Tooltip({
        content: templateCells[i].innerText
      }, templateCells[i]);
      i++;
    }
  }
}
interface ItemType {
  ChatID: string;
  Agent: string;
  Category: string;
  Control: string;
  TimeSpent: string;
}