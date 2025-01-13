import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path: '' , redirectTo: 'home' , pathMatch: 'full' ,title: 'Home'},
    {path: 'home' , component: HomeComponent , title: 'Home'},
    {path: 'about' , component: AboutComponent , title: 'About'},
    {path: 'portfolio' , component: PortfolioComponent , title: 'Portfolio'},
    {path: 'contact' , component: ContactComponent , title: 'Contact'},
    {path: '**' , component: NotFoundComponent, title: 'Not Found'},
];
