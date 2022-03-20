import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  template: ` <router-outlet></router-outlet> `,
  styles: [],
})
export class BlogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
