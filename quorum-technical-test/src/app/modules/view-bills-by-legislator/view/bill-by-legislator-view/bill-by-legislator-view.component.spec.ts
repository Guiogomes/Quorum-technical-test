import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillByLegislatorViewComponent } from './bill-by-legislator-view.component';

describe('BillByLegislatorViewComponent', () => {
  let component: BillByLegislatorViewComponent;
  let fixture: ComponentFixture<BillByLegislatorViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillByLegislatorViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BillByLegislatorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
