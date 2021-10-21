import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { CollectionListComponent } from './pages/collection-list/collection-list.component';
import { CollectionDetailComponent } from './pages/collection-detail/collection-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PaginationComponent,
    CollectionListComponent,
    CollectionDetailComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
