import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDropsPageComponent } from './new-drops-page.component';

describe('NewDropsPageComponent', () => {
  let component: NewDropsPageComponent;
  let fixture: ComponentFixture<NewDropsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDropsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDropsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
