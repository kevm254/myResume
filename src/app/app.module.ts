// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { HomeComponent } from './components/content/home/home.component';
import { WorkExperienceComponent } from './components/content/home/work_experience/work_experience.component';
import { WorkExpPanelComponent } from './components/content/home/work_experience/work_exp_panel/work_exp_panel.component';

// Models
import { AppRoutes } from './app.routes';

// Service
import { WorkExperienceService } from './services/components/work_experience.service';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    FooterComponent,

    HomeComponent,
    WorkExperienceComponent,
    WorkExpPanelComponent
  ],

  // Modules
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],

  providers: [WorkExperienceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
