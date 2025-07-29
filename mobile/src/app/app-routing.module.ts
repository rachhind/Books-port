import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'add-book',
    loadChildren: () => import('./components/add-book/add-book.module').then(m => m.AddBookModule)
  },
  {
    path: 'book-list',
    loadChildren: () => import('./components/book-list/book-list.module').then(m => m.BookListModule)
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) ],
  exports: [RouterModule]
})
export class AppRoutingModule {}