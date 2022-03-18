import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IPost } from '../post.model';

const API_URL = 'http://demo2921796.mockable.io/';

@Injectable()
export class PostService {

  posts: IPost[];
  post$: Subject<IPost> = new Subject();

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<IPost[]> {
    // local caching
    if (this.posts) {
      return of(this.posts);
    }

    return this.httpClient.get<IPost[]>('../assets/data/posts.json')
      .pipe(
        tap(
          posts =>
        this.posts = posts
        )
      );
  }

  getPost(id: number): void {
    // local caching
    if (this.posts) {
      const post = this.posts.find(p => p.id === id);
      if (post) {
        this.post$.next(post);
      }
    }

    this.httpClient.get<IPost>(`../assets/data/post_${id}.json`)
    .subscribe(post => this.post$.next(post));
  }
}
