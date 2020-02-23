import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEventCategoriesComponent } from './manage-event-categories.component';

describe('ManageEventCategoriesComponent', () => {
  let component: ManageEventCategoriesComponent;
  let fixture: ComponentFixture<ManageEventCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageEventCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEventCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
