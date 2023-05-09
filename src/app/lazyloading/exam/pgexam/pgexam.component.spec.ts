import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgexamComponent } from './pgexam.component';

describe('PgexamComponent', () => {
  let component: PgexamComponent;
  let fixture: ComponentFixture<PgexamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgexamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
