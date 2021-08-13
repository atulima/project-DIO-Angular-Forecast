import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmarksPage } from './pages/bookmarks/bookmarks.page';
import { HomePage } from '../app/pages/home/containers/home/home.page';
import { DetailsPage } from './pages/details/containers/details/details.page';


const routes: Routes = [
  {path: '', component: HomePage},
  {path: 'bookmarks', component: BookmarksPage},
  // {path: 'details', component: DetailsPage},
  {path: 'details', loadChildren: () => import('./pages/details/details.module').then(m => m.DetailsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
