import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FareComparisonComponent } from './fare-comparison.component';

describe('FareComparisonComponent', () => {
  let component: FareComparisonComponent;
  let fixture: ComponentFixture<FareComparisonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FareComparisonComponent]
    });
    fixture = TestBed.createComponent(FareComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
