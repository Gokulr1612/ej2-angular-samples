import { Component, OnInit } from '@angular/core'
// Imported Syncfusion RichTextEditorModule from Rich Text Editor package
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor'

@Component({
  selector: 'app-rte',
  templateUrl: './rte.component.html',
  styleUrls: ['./rte.component.css']
})
export class RteComponent implements OnInit {
  constructor () {}

  public tools!: object
  public quickTools!: object

  ngOnInit (): void {
    this.quickTools = {
      image: [
        'Replace', 'Align', 'Caption', 'Remove', 'InsertLink', '-', 'Display', 'AltText', 'Dimension']
    }
    this.tools = {
      items: ['Undo', 'Redo', '|',
        'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
        'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
        'SubScript', 'SuperScript', '|',
        'LowerCase', 'UpperCase', '|',
        'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
        'Indent', 'Outdent', '|', 'CreateLink',
        'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen']
    }
  }
}
