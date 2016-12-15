import { NgModule } from '@angular/core';
import { RouterModule, Routes } from'@angular/router';

import { AboutComponent } from './about/about.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { ShortListComponent } from './short-list/short-list.component';
import { TopicsTableComponent } from './topics-table/topics-table.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'shortlist', component: ShortListComponent },
  { path: 'topicstable', component: TopicsTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
// export const routing = RouterModule.forRoot(routes);
export class Ng2RoutingModule { }
