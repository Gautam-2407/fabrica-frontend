import { Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactUsComponent } from './homepage/contact-us/contact-us.component';
import { AllProductsComponent } from './all-products/all-products.component';

export const routes: Routes = [
    {
        path:'',
        loadComponent:()=>HomepageComponent,
    },
    {
        path:'signup',
        loadComponent:()=>SignupComponent
    },
    {
        path:'login',
        loadComponent:()=>LoginComponent
    },
    {
        path:'contact-us',
        loadComponent:()=>ContactUsComponent
    },
    {
        path:'products',
        loadComponent:()=>AllProductsComponent
    }
];
