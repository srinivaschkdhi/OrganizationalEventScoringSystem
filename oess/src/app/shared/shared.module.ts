import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SharedRoutingModule } from './shared-routing.module';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { DataAccordionComponent } from './data-accordion/data-accordion.component';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, CarouselComponent, BarChartComponent, DataAccordionComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HighchartsChartModule,
    MatMenuModule,
    BrowserAnimationsModule
  ],
  exports: [HeaderComponent, FooterComponent, CarouselComponent, BarChartComponent, DataAccordionComponent]
})
export class SharedModule { }
