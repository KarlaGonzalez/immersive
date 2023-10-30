import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DecisionTreeComponent } from './decision-tree/decision-tree.component';

const routes: Routes = [
  /* { path: '', component: AppComponent },
  { path: 'decision-tree', component: DecisionTreeComponent } // http://localhost:4200/decision-tree */
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
