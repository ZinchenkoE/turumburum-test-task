import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RegionFilterComponent } from './region-filter/region-filter.component';
import { RegionListComponent } from './region-list/region-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RegionFilterComponent,
    RegionListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
