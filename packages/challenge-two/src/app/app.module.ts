import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { CollectionListComponent } from './pages/collection-list/collection-list.component';
import { CollectionDetailComponent } from './pages/collection-detail/collection-detail.component';
import { LoadingComponent } from './components/loading/loading.component';
import { FormsModule } from '@angular/forms';
import { FiltersComponent } from './components/filters/filters.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PaginationComponent,
    CollectionListComponent,
    CollectionDetailComponent,
    LoadingComponent,
    FiltersComponent,
    InputComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
