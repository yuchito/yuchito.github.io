import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  filter as _filter,
  sortBy as _sortBy,
  uniq as _uniq,
  find as _find,
  isEmpty as _isEmpty,
} from 'lodash';

import * as moment from 'moment';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // animations: [ postsAnimations ]
})
export class HomeComponent implements OnInit {

  githubApiUrl = 'https://api.github.com/users/yuchito/repos';

  repositories: any = [];
  deployements: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get(this.githubApiUrl)
      .subscribe((results) => {
        this.repositories = _sortBy(
          _filter(results, { archived: false, fork: false }),
          'updated_on'
        ).reverse();
      });
  }

  navigateToDemo(deployments_url: string): void {
    this.http
      .get(deployments_url)
      .pipe(
        catchError(({ message }) => {
          console.error(`Error: ${message}`);
          return ObservableOf([]);
        })
      )
      .subscribe((results) => {
        this.deployements = results;

        if (this.deployements.length > 0) {
          let web_url = _sortBy(this.deployements, 'updated_on')[0].payload
            .web_url;
          window.open(web_url, '_blank');
        } else {
          window.alert('No demo');
        }
      });
  }

  formatDate(date: string): string {
    const dateFormat = 'MMMM YYYY';
    const _date = moment(date);

    return moment(date).format(dateFormat);
  }

  viewResume() {
    window.open(
      'https://docs.google.com/document/d/17auATHDZFQqdtdRxNja3DjNI3oxFaNmKwD_rh2poSkc/edit?usp=sharing',
      '_blank'
    );
  }
}
function ObservableOf(arg0: undefined[]): any {
  throw new Error('Function not implemented.');
}
