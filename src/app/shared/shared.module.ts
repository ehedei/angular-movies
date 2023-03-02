import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page404Component } from './pages/page404/page404.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [Page404Component],
  imports: [CommonModule, AppRoutingModule],
})
export class SharedModule {}
