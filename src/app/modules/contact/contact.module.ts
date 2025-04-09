import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

@NgModule({
  declarations: [ContactPageComponent],
  imports: [CommonModule, ContactRoutingModule, ReactiveFormsModule],
})
export class ContactModule {}
