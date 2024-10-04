import { NgModule, Type } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SyncScheduleModule } from './app-shell/schedule/schedule.module'
import { SyncDocumentEditorModule } from './app-shell/document-editor/document-editor.module'
import { SyncRteModule } from './app-shell/rte/rte.module'
import { SyncGridModule } from './app-shell/grid/grid.module'
import { SyncChartModule } from './app-shell/chart/chart.module'
import { SyncNumericTextModule } from './app-shell/numeric-text-box/numeric-text-box.module'

export const routes: Routes = [
  {
    path: 'schedule',
    loadChildren: async (): Promise<Type<SyncScheduleModule>> => await import('./app-shell/schedule/schedule.module').then(module => module.SyncScheduleModule)
  },
  {
    path: 'chart',
    loadChildren: async (): Promise<Type<SyncChartModule>> => await import('./app-shell/chart/chart.module').then(module => module.SyncChartModule)
  },
  {
    path: 'grid',
    loadChildren: async (): Promise<Type<SyncGridModule>> => await import('./app-shell/grid/grid.module').then(module => module.SyncGridModule)
  },
  {
    path: '',
    loadChildren: async (): Promise<Type<SyncGridModule>> => await import('./app-shell/grid/grid.module').then(module => module.SyncGridModule)
  },
  {
    path: 'rte',
    loadChildren: async (): Promise<Type<SyncRteModule>> => await import('./app-shell/rte/rte.module').then(module => module.SyncRteModule)
  },
  {
    path: 'document-editor',
    loadChildren: async (): Promise<Type<SyncDocumentEditorModule>> => await import('./app-shell/document-editor/document-editor.module').then(module => module.SyncDocumentEditorModule)
  },
  {
    path: 'numeric',
    loadChildren: async (): Promise<Type<SyncNumericTextModule>> => await import('./app-shell/numeric-text-box/numeric-text-box.module').then(module => module.SyncNumericTextModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
