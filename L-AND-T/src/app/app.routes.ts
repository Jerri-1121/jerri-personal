import { Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { WelcomeComponent } from './auth/components/welcome/welcome.component';

export const routes: Routes = [
    {path: "login", component: LoginComponent},
    {path: "signup", component: SignupComponent},
    {path: "welcome", component: WelcomeComponent},
    {path: "admin", loadChildren:()=>import("./modules/admin/admin.module").then(e => e.AdminModule)},
    {path: "user", loadChildren:()=>import("./modules/user/user.module").then(e => e.UserModule)}
];
