import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    data: { animation: 'recipes'},
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent,
    data: { animation: 'shopping-list'},
  },
  // {
  //   path: 'shopping-list',
  //   component: ShoppingListComponent,
  //   data: { animation: 'shopping-list'},
  // },
  // {
  //   path: 'shopping-list',
  //   component: ShoppingListComponent,
  //   data: { animation: 'shopping-list'},
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
