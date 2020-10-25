import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHomeSmartComponent } from './list-home-smart.component';

describe('ListHomeSmartComponent', () => {
  let component: ListHomeSmartComponent;
  let fixture: ComponentFixture<ListHomeSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListHomeSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHomeSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
