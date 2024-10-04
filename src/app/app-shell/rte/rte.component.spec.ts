import { ComponentFixture, TestBed } from '@angular/core/testing'

import { RteComponent } from './rte.component'

describe('RteComponent', () => {
  let component: RteComponent
  let fixture: ComponentFixture<RteComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RteComponent]
    })
    fixture = TestBed.createComponent(RteComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
