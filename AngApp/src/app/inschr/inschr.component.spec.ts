import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InschrComponent } from './inschr.component';

describe('InschrComponent', () => {
  let component: InschrComponent;
  let fixture: ComponentFixture<InschrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InschrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InschrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
