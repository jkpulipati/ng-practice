import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  { path: 'home', component: CounterComponent},
  { 
    path: 'product', 
    component: ProductComponent,
    children: [
      { path: 'apple', component: CounterComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
