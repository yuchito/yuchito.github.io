import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { routeState: 1 } },
  { path: 'about', component: AboutComponent, data: { routeState: 2 } },
  {
    path: 'articles',
    loadChildren: () =>
      import('./blog/blog.module').then(
        (m) => m.BlogModule
      ),
    data: { routeState: 3 },
  },
  { path: 'contact', component: ContactComponent, data: { routeState: 4 } },
  { path: '**', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [
    QuicklinkModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: QuicklinkStrategy,
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
