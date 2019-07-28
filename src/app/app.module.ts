import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { WorkComponent, ProjectComponent, AboutComponent, ContactComponent  } from './views';
import { MenuComponent, ProjectTeaserComponent} from './components';
import { ParallaxDirective } from './directives/parallax.directive';
import { ScrollDirective } from './directives/scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WorkComponent,
    ProjectTeaserComponent,
    ParallaxDirective,
    ScrollDirective,
    ProjectComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
