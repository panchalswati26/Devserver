import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UgexamComponent } from './ugexam.component';

describe('UgexamComponent', () => {
  let component: UgexamComponent;
  let fixture: ComponentFixture<UgexamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UgexamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UgexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
