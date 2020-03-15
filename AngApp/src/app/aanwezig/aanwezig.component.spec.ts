import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AanwezigComponent } from './aanwezig.component';

describe('AanwezigComponent', () => {
  let component: AanwezigComponent;
  let fixture: ComponentFixture<AanwezigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AanwezigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AanwezigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
