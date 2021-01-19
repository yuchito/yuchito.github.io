import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../core/post-service.service';
import { IPost } from '../post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

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
