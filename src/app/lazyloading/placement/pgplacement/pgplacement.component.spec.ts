import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgplacementComponent } from './pgplacement.component';

describe('PgplacementComponent', () => {
  let component: PgplacementComponent;
  let fixture: ComponentFixture<PgplacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgplacementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
