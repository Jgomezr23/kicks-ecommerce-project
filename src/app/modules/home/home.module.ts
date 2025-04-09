import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoriesComponent } from './components/categories/categories.component';
import { HeroComponent } from './components/hero/hero.component';
import { NewDropsComponent } from './components/new-drops/new-drops.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { HomeRoutingModule } from './home-routing.module';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    CategoriesComponent,
    HeroComponent,
    NewDropsComponent,
    ReviewsComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
  exports: [
    LandingPageComponent,
    CategoriesComponent,
    HeroComponent,
    NewDropsComponent,
    ReviewsComponent,
  ],
})
export class HomeModule {}
