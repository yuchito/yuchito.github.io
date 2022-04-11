import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogArticlesListRoutingModule } from './blog-articles-list-routing.module';
import { BlogArticlesListComponent } from './blog-articles-list.component';


@NgModule({
  declarations: [BlogArticlesListComponent],
  imports: [
    CommonModule,
    BlogArticlesListRoutingModule
  ]
})
export class BlogArticlesListModule { }
