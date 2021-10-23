import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionDetailComponent } from './pages/collection-detail/collection-detail.component';
import { CollectionListComponent } from './pages/collection-list/collection-list.component';

const routes: Routes = [
  { path: '', component: CollectionListComponent },
  { path: ':id', component: CollectionDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
