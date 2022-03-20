import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/@core/services/post-service.service';

@Component({
  selector: 'app-blog-articles-details',
  templateUrl: './blog-articles-details.component.html',
  styleUrls: ['./blog-articles-details.component.scss']
})
export class BlogArticlesDetailsComponent implements OnInit {

  post$ = this.postService.post$;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postService.getPost(params.id);
    });
  }

}
