import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionListComponent } from './pages/collection-list/collection-list.component';

const routes: Routes = [{ path: '', component: CollectionListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
