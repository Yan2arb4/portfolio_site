import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './components/intro/intro.component';
import { CanvasDotsComponent } from './components/canvas/canvas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { LanguageComponent } from './components/language/language.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    CanvasDotsComponent,
    HeaderComponent,
    MainComponent,
    LanguageComponent,
    SkillsComponent,
    ProjectsComponent,
    ProjectCardComponent,
    FooterComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
