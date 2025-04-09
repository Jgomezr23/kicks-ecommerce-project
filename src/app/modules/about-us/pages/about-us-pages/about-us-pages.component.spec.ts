import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsPagesComponent } from './about-us-pages.component';

describe('AboutUsPagesComponent', () => {
  let component: AboutUsPagesComponent;
  let fixture: ComponentFixture<AboutUsPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
