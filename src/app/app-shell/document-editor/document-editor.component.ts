import { Component, ViewChild } from '@angular/core'
import { DocumentEditorContainerComponent } from '@syncfusion/ej2-angular-documenteditor'

@Component({
  selector: 'app-document-editor',
  templateUrl: './document-editor.component.html',
  styleUrls: ['./document-editor.component.css']
})
export class DocumentEditorComponent {
  @ViewChild('document_editor')
  public container!: DocumentEditorContainerComponent

  onCreated () {
    // Specifies the language id to map server side dictionary.
    this.container.documentEditor.spellChecker.languageID = 1033
    this.container.documentEditor.spellChecker.removeUnderline = false
    this.container.documentEditor.spellChecker.allowSpellCheckAndSuggestion = true
  }
}
