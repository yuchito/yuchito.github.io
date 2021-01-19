import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../core/post-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    /* this could be abstracted in separate file for reuse */
    trigger('postsAnimation', [
      transition(':enter', [
        /* initial */
        style({ transform: 'translateY(100%)', opacity: 0}),
        /* final */
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)', style({
          transform: 'translateY(0)', opacity: 1
        }))
      ]),
      /* could have added a transition for leave,
      but since we aren't removing any posts when on the Home page,
      we don't need that here */
    ])
  ]
})
export class HomeComponent implements OnInit {

  posts$ = this.postService.getPosts();

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

}
