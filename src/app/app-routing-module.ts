import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanCard } from './components/plan-card/plan-card';
import { PlanList } from './components/plan-list/plan-list';

const routes: Routes = [
  { path: '', redirectTo: 'destinos', pathMatch: 'full' },
  { path: 'destinos', component: PlanCard },      // página de destinos
  { path: 'transportes', component: PlanList }    // página de medios de transporte
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
