import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiveLoginComponent } from './hive-login.component';

describe('HiveLoginComponent', () => {
  let component: HiveLoginComponent;
  let fixture: ComponentFixture<HiveLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiveLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiveLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
