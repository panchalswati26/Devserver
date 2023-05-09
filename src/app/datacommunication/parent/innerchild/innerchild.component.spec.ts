import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerchildComponent } from './innerchild.component';

describe('InnerchildComponent', () => {
  let component: InnerchildComponent;
  let fixture: ComponentFixture<InnerchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnerchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
