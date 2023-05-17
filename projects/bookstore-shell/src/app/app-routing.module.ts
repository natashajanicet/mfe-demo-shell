import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  pathMatch: 'full'
}, {
    path: 'auth',
    loadChildren: () => import('auth-mfe/Module').then(m => m.AuthModule)
}, {
    path: 'books',
    loadChildren: () => import('book-mfe/BookModule').then(m => m.BookModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
