import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottonsheetComponent } from './bottonsheet.component';

describe('BottonsheetComponent', () => {
  let component: BottonsheetComponent;
  let fixture: ComponentFixture<BottonsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottonsheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottonsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
