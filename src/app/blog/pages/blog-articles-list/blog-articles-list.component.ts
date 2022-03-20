import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/@core/services/post-service.service';
import { postsAnimations } from 'src/app/animations';

@Component({
  selector: 'app-blog-articles-list',
  templateUrl: './blog-articles-list.component.html',
  styleUrls: ['./blog-articles-list.component.scss'],
  animations: [postsAnimations],
})
export class BlogArticlesListComponent implements OnInit {

  posts$ = this.postService.getPosts();

  constructor(private postService: PostService) { }
  ngOnInit(): void {
  }

}
