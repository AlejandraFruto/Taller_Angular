import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from './series.component';
import { SeriesListComponent } from './series-list/series-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SeriesService } from './series.service';

@NgModule({
  declarations: [
    SeriesListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [SeriesService],
  exports: [
    SeriesListComponent
  ]
})
export class SeriesModule { }
