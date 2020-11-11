import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletIconComponent } from './delet-icon.component';

describe('DeletIconComponent', () => {
  let component: DeletIconComponent;
  let fixture: ComponentFixture<DeletIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
