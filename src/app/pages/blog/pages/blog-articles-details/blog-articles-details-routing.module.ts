import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogArticlesDetailsComponent } from './blog-articles-details.component';

const routes: Routes = [{
  path: ':id/:slug',
  component: BlogArticlesDetailsComponent
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogArticlesDetailsRoutingModule { }
