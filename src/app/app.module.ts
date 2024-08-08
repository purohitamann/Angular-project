import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
;
import {MatTabsModule} from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './modules/material-ui.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { ProjectDivComponent } from './project-div/project-div.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import {Routes, RouterModule} from '@angular/router';
import { LikeButtonService } from './like-button.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { ProjectComponentByIdComponent } from './project-component-by-id/project-component-by-id.component';
import { MainComponent } from './main/main.component';
const routes: Routes = [
  { path: '', component: MainComponent} ,
   { path: 'project/:id', component: ProjectComponentByIdComponent },
   { path: 'contact', component: ContactComponent },
   {path: 'about', component: AboutComponent},
   {path: 'home', component: HomeComponent},
   {path: 'project', component: ProjectDivComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ProjectComponent,
    ProjectDivComponent,
    ContactComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

    
    
  ],
  providers: [provideClientHydration(), LikeButtonService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}

