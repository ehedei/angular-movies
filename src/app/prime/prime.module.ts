import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RatingModule } from 'primeng/rating';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    InputTextModule,
    MenubarModule,
    PaginatorModule,
    ProgressSpinnerModule,
    RatingModule,
    ToastModule,
  ],
  providers: [MessageService],
})
export class PrimeModule {}
