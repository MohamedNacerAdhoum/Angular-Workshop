import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { ErrorComponent } from './error/error.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component:HomeComponent,
    children:[{path: 'categories', component:ListCategoriesComponent}]
  },
  {path: 'categories', component:ListCategoriesComponent},
  {path: 'productCategory/:id', component:ProductsCategoryComponent},
  {path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)},
  {path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)},
  {path: 'apropos', loadChildren: () => import('./apropos/apropos.module').then(m => m.AproposModule)},
  {path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},
  
  {path:"**", component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
