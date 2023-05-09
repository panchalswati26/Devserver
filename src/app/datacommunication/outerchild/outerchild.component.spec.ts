import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterchildComponent } from './outerchild.component';

describe('OuterchildComponent', () => {
  let component: OuterchildComponent;
  let fixture: ComponentFixture<OuterchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OuterchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OuterchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
