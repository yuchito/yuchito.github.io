import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
  // animations: [ postsAnimations ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll(el: HTMLElement): void {
    el.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'});
  }
}
