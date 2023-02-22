import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CustomersComponent } from './components/customers/customers.component';
import { HomeComponent } from './components/home/home.component';
import { InnovationComponent } from './components/innovation/innovation.component';
import { NewsComponent } from './components/news/news.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'home', component: HomeComponent },
  { path:'about', component: AboutComponent },
  { path:'services', component: ServicesComponent },
  { path:'customers', component: CustomersComponent },
  { path:'innovation', component: InnovationComponent },
  { path:'news', component: NewsComponent },
  { path:'home', component: HomeComponent },
  { path:'**', redirectTo:'home', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
