import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { HighchartsChartModule} from 'highcharts-angular';
import { DataAccordionComponent } from './data-accordion/data-accordion.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, CarouselComponent, BarChartComponent, DataAccordionComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HighchartsChartModule
  ],
  exports:[HeaderComponent,FooterComponent,CarouselComponent,BarChartComponent,DataAccordionComponent]
})
export class SharedModule { }
