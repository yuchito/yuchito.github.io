import { Component, OnInit } from '@angular/core';
import { PostService } from '../core/post-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts$ = this.postService.getPosts();

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

}
