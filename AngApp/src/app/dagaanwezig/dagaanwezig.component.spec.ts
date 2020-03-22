import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DagaanwezigComponent } from './dagaanwezig.component';

describe('DagaanwezigComponent', () => {
  let component: DagaanwezigComponent;
  let fixture: ComponentFixture<DagaanwezigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DagaanwezigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DagaanwezigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
