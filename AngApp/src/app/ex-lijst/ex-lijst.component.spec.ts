import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExLijstComponent } from './ex-lijst.component';

describe('ExLijstComponent', () => {
  let component: ExLijstComponent;
  let fixture: ComponentFixture<ExLijstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExLijstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExLijstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
