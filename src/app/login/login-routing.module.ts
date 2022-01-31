import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignUpComponent } from "../sign-up/sign-up.component";
import { LoginComponent } from "./login.component";

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: '/signup', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LoginRoutingModule {}
