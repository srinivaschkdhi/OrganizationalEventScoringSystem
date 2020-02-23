import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAccordionComponent } from './data-accordion.component';

describe('DataAccordionComponent', () => {
  let component: DataAccordionComponent;
  let fixture: ComponentFixture<DataAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
