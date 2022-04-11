import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        loadChildren: () => import('./pages/blog-articles-list/blog-articles-list.module')
          .then(m => m.BlogArticlesListModule),
      },
      {
        path: 'details',
        loadChildren: () => import('./pages/blog-articles-details/blog-articles-details.module')
          .then(m => m.BlogArticlesDetailsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
