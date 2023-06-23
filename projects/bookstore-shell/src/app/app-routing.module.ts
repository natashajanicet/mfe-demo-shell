import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  pathMatch: 'full'
}, {
    path: 'auth',
    // loadChildren: () => import('auth-mfe/Module').then(m => m.AuthModule)
    loadChildren: () => loadRemoteModule({
      type: 'manifest',
      remoteName: 'auth-mfe',
      exposedModule: './Module'
    })
    .then(m => m.AuthModule)
}, {
    path: 'books',
    // loadChildren: () => import('book-mfe/BookModule').then(m => m.BookModule)
    loadChildren: () => loadRemoteModule({
      type: 'manifest',
      remoteName: 'book-mfe',
      exposedModule: './BookModule'
    })
    .then(m => m.BookModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
