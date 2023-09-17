import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeleticketComponent } from './teleticket/teleticket.component';

const routes: Routes = [
  {path:'', redirectTo: '/tickets', pathMatch: 'full'},
  {path:'tickets', component: TeleticketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
