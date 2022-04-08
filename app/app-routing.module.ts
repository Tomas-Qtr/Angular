import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoteleriaComponent } from './vsitas/coteleria/coteleria.component';
import { PrincipalComponent } from './vsitas/principal/principal.component';

const routes: Routes = [
  {path:'principal', component: PrincipalComponent},
  {path:'cocteleria', component: CoteleriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
