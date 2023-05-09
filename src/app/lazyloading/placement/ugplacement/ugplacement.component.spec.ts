import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UgplacementComponent } from './ugplacement.component';

describe('UgplacementComponent', () => {
  let component: UgplacementComponent;
  let fixture: ComponentFixture<UgplacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UgplacementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UgplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
