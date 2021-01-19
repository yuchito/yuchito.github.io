import { Component, OnInit } from '@angular/core';
import { postsAnimations } from '../animations';
import { PostService } from '../core/post-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [ postsAnimations ]
})
export class HomeComponent implements OnInit {

  posts$ = this.postService.getPosts();

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

}
