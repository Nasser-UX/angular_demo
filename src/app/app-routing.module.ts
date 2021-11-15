import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { DatepickerComponent } from './datepicker/datepicker.component';

const routes: Routes = [
  // path '' empty for the component that loads first
  { path: '', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'accordion', component: BootstrapComponent },
  { path: 'datepicker', component: DatepickerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
