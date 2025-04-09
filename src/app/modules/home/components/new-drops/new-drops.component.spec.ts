import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDropsComponent } from './new-drops.component';

describe('NewDropsComponent', () => {
  let component: NewDropsComponent;
  let fixture: ComponentFixture<NewDropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDropsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
