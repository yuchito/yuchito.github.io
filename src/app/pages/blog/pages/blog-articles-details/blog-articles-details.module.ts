import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogArticlesDetailsRoutingModule } from './blog-articles-details-routing.module';
import { BlogArticlesDetailsComponent } from './blog-articles-details.component';


@NgModule({
  declarations: [BlogArticlesDetailsComponent],
  imports: [
    CommonModule,
    BlogArticlesDetailsRoutingModule
  ]
})
export class BlogArticlesDetailsModule { }
