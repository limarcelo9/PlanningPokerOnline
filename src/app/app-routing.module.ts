import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then((m) => m.SignUpModule)
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})

export class AppRountingModule {}
