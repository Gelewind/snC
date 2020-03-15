import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LidComponent } from './lid.component';

describe('LidComponent', () => {
  let component: LidComponent;
  let fixture: ComponentFixture<LidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
