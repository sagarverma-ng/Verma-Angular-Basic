import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceConceptComponent } from './service-concept.component';

describe('ServiceConceptComponent', () => {
  let component: ServiceConceptComponent;
  let fixture: ComponentFixture<ServiceConceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceConceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
