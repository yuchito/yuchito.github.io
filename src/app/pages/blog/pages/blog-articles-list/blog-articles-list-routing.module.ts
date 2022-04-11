import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogArticlesListComponent } from './blog-articles-list.component';

const routes: Routes = [{
  path: '',
  component: BlogArticlesListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogArticlesListRoutingModule { }
