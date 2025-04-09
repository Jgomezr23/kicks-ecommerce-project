import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us-pages',
  templateUrl: './about-us-pages.component.html',
  styleUrls: ['./about-us-pages.component.css'],
})
export class AboutUsPagesComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
