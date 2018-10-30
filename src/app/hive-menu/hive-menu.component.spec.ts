import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiveMenuComponent } from './hive-menu.component';

describe('HiveMenuComponent', () => {
  let component: HiveMenuComponent;
  let fixture: ComponentFixture<HiveMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiveMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiveMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
