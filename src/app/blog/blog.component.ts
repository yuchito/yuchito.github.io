import { Component, OnInit } from '@angular/core';
import {PostService} from '../core/post-service.service';
import {postsAnimations} from '../animations';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  animations:  [ postsAnimations ],
})
export class BlogComponent implements OnInit {

  posts$ = this.postService.getPosts();

  constructor(private postService: PostService) { }
  ngOnInit(): void {
  }

}
