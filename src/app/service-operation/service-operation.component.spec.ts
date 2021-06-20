import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOperationComponent } from './service-operation.component';

describe('ServiceOperationComponent', () => {
  let component: ServiceOperationComponent;
  let fixture: ComponentFixture<ServiceOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
