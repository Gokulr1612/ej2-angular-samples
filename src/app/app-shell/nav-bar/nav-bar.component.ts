import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common'
// import { SidebarModule } from '@syncfusion/ej2-angular-navigations'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  // imports: [SidebarModule]
})
export class NavBarComponent {
  skipLinkPath!: string
  constructor (private readonly location: Location) { }

  ngOnInit () {
    this.skipLinkPath = `${this.location.path()}#mainContent`
  }
}
